import React, { useEffect, useState } from "react";
import { Navigation } from "../components/navigation/Navigation";
import { MoviesBody } from "../components/movies/MoviesBody";

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=15e839c63532046ead1a55a79f13f2f2&language=en-US&page=1",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <Navigation />
      <MoviesBody movies={movies} />
    </>
  );
};
