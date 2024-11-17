import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        if (!search) {
            setMovies([]);
            return;
        }

        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=1e3a2392`);
                const data = await response.json();
                if (data.Response === "True") {
                    setMovies(data.Search);
                } else {
                    setMovies([]);
                }
            } catch (err) {
                setError("Failed to fetch movies");
            } finally {
                setLoading(false);
            }
        };
        const timer = setTimeout(() => {
            fetchMovies();
        }, 500); 

        return () => clearTimeout(timer);
    }, [search]);

    const handleFeedback = () => {
        navigate("/feedback");
    };

    return (
        <>
            <div className="flex justify-between items-center p-4">
                <div className="flex gap-3">
                    <h1 className="cine-prime text-red-600 font-bold text-3xl">𝓒𝓲𝓷𝓮𝓟𝓻𝓲𝓶𝓮</h1>
                    <div className="search-div relative w-[600px] bg-custom-gray rounded-3xl">
                        <input
                            className="w-full bg-transparent p-2 rounded-3xl text-white pl-4"
                            placeholder="Search..."
                            type="text"
                            value={search}
                            onChange={handleSearchChange}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 text-gray-400 bg-transparent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197M15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="font-bold p-2 rounded-md hover:underline hover:rounded-full hover:bg-custom-gray" onClick={handleFeedback}>F</button>
                    <button className="flex justify-center items-center font-bold text-white bg-red-600 rounded-full w-10 h-10 hover:bg-red-700 cursor-not-allowed">S</button>
                </div>
            </div>
            <div className="border-custom-gray border"></div>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {movies.length > 0 ? (
                <div className="p-4">
                    <h2 className="text-xl font-bold">Search Results:</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {movies.map((movie) => (
                            <Link key={movie.imdbID} to={`/movie-details/${movie.imdbID}`}>
                                <div className="p-4 bg-custom-gray rounded-lg mb-4">
                                    <img
                                        src={movie.Poster}
                                        alt={movie.Title}
                                        className="w-full h-40 object-cover rounded-md"
                                    />
                                    <h3 className="text-xl font-semibold line-clamp-1">{movie.Title}</h3>
                                    <p className="text-gray-400">Year: {movie.Year}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                search && !loading && <p>No movies found</p>
            )}
        </>
    );
}

export default Header;
