import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";

function MovieCard() {
    const [movie, setMovie] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const navigate = useNavigate();

    const fetchMovies = async (page) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?s=batman&page=${page}&apikey=${import.meta.env.VITE_API_KEY}`);
            const data = await response.json();
            setMovie(data.Search || []);
        } catch (error) {
            console.error("Failed to fetch....", error);
        }
    };

    const clickMovieCard = (id) => {
        navigate(`/movie-details/${id}`);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        fetchMovies(page);
    };

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    return (
        <div className="p-4">
            <h1 className="font-bold text-2xl mb-4">Trending Movies</h1>
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 rounded-lg">
                {movie.map((item) => (
                    <li key={item.imdbID} className="bg-custom-gray rounded-lg p-3 cursor-pointer" onClick={() => clickMovieCard(item.imdbID)}>
                        <h2 className="line-clamp-1 font-bold bg-custom-gray pb-1">{item.Title}</h2>
                        <img
                            className="rounded-lg w-full object-cover"
                            src={item.Poster}
                            alt={`Poster of ${item.Title}`}
                        />
                        <p className="mt-2 bg-custom-gray">Year: {item.Year}</p>
                    </li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

export default MovieCard;

