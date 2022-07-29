import React from "react";
import { Link } from "react-router-dom";
import { MovieData } from "./MovieData";

const IMG_API = "https://image.tmdb.org/t/p/w800";

export const HomeBody = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <div className="app">
        <div className="app__menu">
          <div className="app__menu--logo-box">
            <div className="app__menu--text">Movie app</div>
          </div>
          <div className="app__menu--nav">
            <div className="app__menu--list">
              <div className="app__menu--heading">MENU</div>
              <div className="app__menu--item">Home</div>
              <div className="app__menu--item">Community</div>
              <div className="app__menu--item">Discover</div>
              <div className="app__menu--item">Awards</div>
              <div className="app__menu--item">Celebs</div>
            </div>
            <br />

            <br />
            <div className="app__menu--list">
              <div className="app__menu--heading">CATEGORY</div>
              <Link to="/movies" style={{ textDecoration: "none" }}>
                <div className="app__menu--item">Movies</div>
              </Link>
              <Link to="/shows" style={{ textDecoration: "none" }}>
                <div className="app__menu--item">TV Shows</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="app__main">
          <div className="main__nav">
            <div className="main__nav--movie">Movie</div>
            <div className="main__nav--show">TV Show</div>
          </div>
          <div className="app__body">
            <div className="app__body--hero">
              {movies.length > 0 &&
                movies
                  .map((movie) => (
                    <div>
                      <img src={IMG_API + movie.backdrop_path} />
                    </div>
                  ))
                  .slice(0, 1)}
            </div>
            <div className="app__body--now-playing">
              <h4>Now playing</h4>
              <div className="collection-container">
                {movies.length > 0 &&
                  movies.map((movie) => (
                    <ul>
                      <Link to={`/movie/${movie.id}`}>
                        <li>
                          <MovieData key={movie.id} {...movie} />
                        </li>
                      </Link>
                    </ul>
                  ))}
              </div>
            </div>
            <div className="app__body--top-rated">
              <h4>Top Rated</h4>
              <div className="collection-container">
                {movies.length > 0 &&
                  movies.map((movie) => (
                    <ul>
                      <Link to={`/movie/${movie.id}`}>
                        <li>
                          <MovieData key={movie.id} {...movie} />
                        </li>
                      </Link>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="app__micro">MicroFE</div>
      </div>
    </div>
  );
};
