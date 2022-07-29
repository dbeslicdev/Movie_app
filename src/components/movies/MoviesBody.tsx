import React from "react";
import "./MoviesBody.scss";
import { Link } from "react-router-dom";
import { MovieData } from "../home/MovieData";

const IMG_API = "https://image.tmdb.org/t/p/w800";

export const MoviesBody = ({ movies }) => {
  console.log(movies);
  return (
    <div className="movies-collection">
      <div className="movies-collection__container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <div>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>
                  <MovieData key={movie.id} {...movie} />
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
