import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";

function MovieCard() {
    const [movie, setMovie] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const navigate = useNavigate();

    const fetchMovies = async (page) => {
        try {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const response = await fetch(
                `https://www.omdbapi.com/?s=batman&page=${page}&apikey=${API_KEY}`
            );
            const data = await response.json();

            if (data.Response === "True") {
                setMovie(data.Search || []);
            } else {
                console.error("Error fetching movies:", data.Error);
                setMovie([]);
            }
        } catch (error) {
            console.error("Failed to fetch movies:", error);
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
            <h1 className="font-bold text-2xl mb-4">Popular Movies</h1>
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 rounded-lg">
                {movie.map((item) => (
                    <li
                        key={item.imdbID}
                        className="bg-custom-gray rounded-lg p-3 cursor-pointer"
                        onClick={() => clickMovieCard(item.imdbID)}
                    >
                        <h2 className="line-clamp-1 font-bold bg-custom-gray pb-1">
                            {item.Title}
                        </h2>
                        <img
                            className="rounded-lg w-full object-cover"
                            src={item.Poster !== "N/A" ? item.Poster : "/placeholder.png"}
                            alt={`Poster of ${item.Title}`}
                        />
                        <p className="mt-2 bg-custom-gray">Year: {item.Year}</p>
                    </li>
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default MovieCard;
