import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Navigation } from "../components/navigation/Navigation";
import { MovieBody } from "../components/movie_details/MovieBody";

export const MovieDetail: React.FC = () => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const params = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!params) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=15e839c63532046ead1a55a79f13f2f2&language=en-US&append_to_response=credits%2Crecommendations`,
    )
      .then((response) => response.json())
      .then((json) => {
        setItem(json);
      });
  }, [params.location]);

  console.log(item);

  return (
    <>
      <Navigation />
      <MovieBody item={item} />
    </>
  );
};
