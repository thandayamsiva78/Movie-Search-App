import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=1e3a2392`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <section className="p-4">
            <section className="movie-details flex bg-gradient-to-r from-gray-800 to-black-900 rounded-lg shadow-lg">
                <div className="p-4 flex justify-center">
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="w-full object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="p-4 space-y-4">
                    <h1 className="movie-title text-4xl font-bold text-custom-primary mb-4 text-red-600">{movie.Title}</h1>
                    <p><span className="font-semibold">Plot:</span> {movie.Plot}</p>
                    <div className="text-base text-custom-secondary">
                        <p><span className="font-semibold">Runtime:</span> {movie.Runtime}</p>
                        <p><span className="font-semibold">Language:</span> {movie.Language}</p>
                        <p><span className="font-semibold">Country:</span> {movie.Country}</p>
                        <p><span className="font-semibold">Year:</span> {movie.Year}</p>
                        <p><span className="font-semibold">Genre:</span> {movie.Genre}</p>
                        <p><span className="font-semibold">Director:</span> {movie.Director}</p>
                        <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
                        <p><span className="font-semibold">IMDB Rating:</span> {movie.imdbRating}</p>
                        <p><span className="font-semibold">Awards:</span> {movie.Awards}</p>
                    </div>
                    <button className="flex gap-2 text-white bg-red-600 rounded-md px-4 py-2 font-bold hover:text-red-600 hover:bg-white">
                        <span>Watch Movie</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                    </button>
                </div>
            </section>
        </section>
    );
};

export default MovieDetails;
