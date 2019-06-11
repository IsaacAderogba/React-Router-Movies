import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

import axios from "axios";

const MovieList = () =>  {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(response => {
        setMovies(response.data)
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  })

    return (
      <div className="movie-list">
        {movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
}

function MovieDetails({ movie }) {
  const { id } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}

export default MovieList;
