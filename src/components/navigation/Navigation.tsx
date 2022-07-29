import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <>
      <div className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav__logo">Movie App</div>
        </Link>
        <div className="nav__items">
          <Link to="/movies" style={{ textDecoration: "none" }}>
            <div className="nav__items--movie">Movies</div>
          </Link>
          <Link to="/shows" style={{ textDecoration: "none" }}>
            <div className="nav__items--show">TV Shows</div>
          </Link>
        </div>
      </div>
    </>
  );
};
