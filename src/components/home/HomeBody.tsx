import React from "react";
import { Link } from "react-router-dom";
import { MovieData } from "./MovieData";

export const HomeBody = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <div className="app">
        <div className="app__menu">
          <div className="app__menu--logo-box">
            {/* <img src="" className="app__menu--logo"></img> */}
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
            <div className="app__menu--list">
              <div className="app__menu--heading">LIBRARY</div>
              <div className="app__menu--item">Recent</div>
              <div className="app__menu--item">Top Rated</div>
              <div className="app__menu--item">Download</div>
            </div>
            <br />
            <div className="app__menu--list">
              <div className="app__menu--heading">CATEGORY</div>
              <div className="app__menu--item">Movie</div>
              <div className="app__menu--item">TV Show</div>
              <div className="app__menu--item">Anime</div>
            </div>
          </div>
        </div>
        <div className="app__main">
          <div className="main__nav">
            <div className="main__nav--movie">Movie</div>
            <div className="main__nav--show">TV Show</div>
            <div className="main__nav--anime">Anime</div>
          </div>
          <div className="app__body">
            <div className="app__body--hero">
              <img src=""></img>
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
