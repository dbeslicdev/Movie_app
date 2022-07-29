import React, { useEffect, useState } from "react";
import { Navigation } from "../components/navigation/Navigation";
import { ShowsBody } from "../components/show_details/ShowsBody";

export const Shows = () => {
  const [shows, setShows] = useState([]);

  const fetchData = useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=15e839c63532046ead1a55a79f13f2f2&language=en-US&page=1",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShows(data.results);
      });
  }, []);

  return (
    <>
      <Navigation />
      <ShowsBody shows={shows} />
    </>
  );
};
