import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { isArgumentsObject } from "util/types";
import { setEnvironmentData } from "worker_threads";

export const MovieDetail: React.FC = () => {
  const params = useParams();
  console.log("Hello!");

  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!params) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=15e839c63532046ead1a55a79f13f2f2&language=en-US`,
    )
      .then((response) => response.json())
      .then((json) => {
        setItem(json);
      });
  }, [params.location]);

  console.log(item);

  return (
    <>
      {item && (
        <div>
          <div>{item.title}</div>
          <div>{item.release_date}</div>
          <div>{item.tagline}</div>
          <div></div>
        </div>
      )}
    </>
  );
};
