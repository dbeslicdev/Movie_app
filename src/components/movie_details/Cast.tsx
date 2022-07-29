import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cast.scss";

interface Actor {
  id: number;
  name: string;
  length: number;
}

interface Cast {
  cast: Actor; //?????
}
const IMG_API = "https://image.tmdb.org/t/p/w200";

export const Cast: React.FC<Cast> = ({ cast }: Cast) => {
  return (
    <>
      {cast.length > 0 &&
        cast
          .map((cast) => (
            <div className="cast">
              <Link to={`/actor/${cast.id}`} style={{ textDecoration: "none" }}>
                <div className="cast__container">
                  <img
                    className="cast__img"
                    src={IMG_API + cast.profile_path}
                  ></img>
                  <div className="cast__name" key={cast.id}>
                    {cast.name}
                  </div>
                  <div className="cast__character">{cast.character}</div>
                </div>
              </Link>
            </div>
          ))
          .slice(0, 5)}
    </>
  );
};
