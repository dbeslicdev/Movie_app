import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return {
    data,
  };
};
