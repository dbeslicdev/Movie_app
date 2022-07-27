import React, { useEffect, useState } from "react";

import "./HomePage.scss";

import { Link } from "react-router-dom";
import { useFetch } from "../components/hooks/useFetch";

import { MovieData } from "../components/home/MovieData";
import { HomeBody } from "../components/home/HomeBody";

export const HomePage: React.FC = () => {
  /* const fetchData = useEffect(() => {
    fetch(NOW_PLAYING_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.slice(0, 4));
      });
  }, []); */

  /* console.log(movies); */

  return (
    <>
      {/*  <HomeBody
      movies={movies}
        setMovies={setMovies} 
      /> */}
    </>
  );
};
