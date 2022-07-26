import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const MovieDetail: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response =
        await `https://api.themoviedb.org/3/movie/${id}?api_key=15e839c63532046ead1a55a79f13f2f2&language=en-US`;
      console.log(response);
      setItem(response);
    };
    getDetail();
  }, [id]);

  return <>{item && <div className="banner"></div>}</>;
};
