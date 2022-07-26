import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

import { MovieData } from "../components/home/MovieData";
import { HomeContent } from "../components/home/HomeContent";

export const HomePage: React.FC = () => {
  const [movies, setMovies] = useState([]);

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const MOVIE_API =
    "https://api.themoviedb.org/3/discover/movie?api_key=15e839c63532046ead1a55a79f13f2f2";

  useEffect(() => {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.slice(0, 5));
      });
  }, []);

  return (
    <>
      <HomeContent movies={movies} />
    </>
  );
};
