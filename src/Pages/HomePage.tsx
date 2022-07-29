import React, { useEffect, useState } from "react";
import "./HomePage.scss";

import { HomeBody } from "../components/home/HomeBody";

export const HomePage: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [newest, setNewest] = useState([]);

  const fetchData = useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=15e839c63532046ead1a55a79f13f2f2&language=en-US&page=1",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.slice(0, 4));
      });
  }, []);

  /*   const fetchData = async () => {
    const topRated = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=15e839c63532046ead1a55a79f13f2f2&language=en&page=1",
    )
      .then((response) => response.json())
      .then((json) => json);
    setTopRated(topRated);

    const newestMovies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=15e839c63532046ead1a55a79f13f2f2&language=en&page=1",
    )
      .then((response) => response.json())
      .then((json) => json);
    setNewest(newestMovies);
  };

   useEffect(() => {
    fetchData();
  }, []); */

  console.log(topRated, "TopRated");
  console.log(newest, "Newest");

  return (
    <>
      <HomeBody movies={movies} />
    </>
  );
};
