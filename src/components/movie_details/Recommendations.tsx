import React from "react";
import { Link } from "react-router-dom";

export const Recommendations = ({ recommendations }) => {
  console.log(recommendations);

  const IMG_API = "https://image.tmdb.org/t/p/w200";

  return (
    <div>
      {recommendations.length > 0 &&
        recommendations
          .map((recommendations) => (
            <div className="recommendation">
              <Link
                to={`/movie/${recommendations.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="recommendation__container">
                  <img
                    className="recommendation__img"
                    src={IMG_API + recommendations.poster_path}
                  ></img>
                  <div
                    className="recommendation__title"
                    key={recommendations.id}
                  >
                    {recommendations.title}
                  </div>
                </div>
              </Link>
            </div>
          ))
          .slice(0, 4)}
    </div>
  );
};
