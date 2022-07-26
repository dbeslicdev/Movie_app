import React from "react";
import { MovieData } from "./MovieData";

export const HomeContent = ({ movies }) => {
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
            <div className="app__body--collection">
              {movies.length > 0 &&
                movies.map((movie) => <MovieData key={movie.id} {...movie} />)}
            </div>
          </div>
        </div>
        <div className="app__right">MicroFE</div>
      </div>
    </div>
  );
};
