import React from "react";
import { Cast } from "../movie_details/Cast";
import { Recommendations } from "../movie_details/Recommendations";
import "./ShowBody.scss";

const IMG_API = "https://image.tmdb.org/t/p/w300";

export const ShowBody = ({ item }) => {
  console.log(item);

  return (
    <div>
      {item && (
        <div className="item">
          <div className="item__container">
            <img
              className="item__img"
              src={IMG_API + item.poster_path}
              alt={item.title}
            />
            <div className="item__ul">
              <div className="item__title ">{item.original_name}</div>
              <div className="item__tag">{item.tagline}</div>
              <div className="item__score">
                <span>User score: </span>
                {item.vote_average}/10
              </div>
              <div className="item__overview">
                <div className="item__overview--heading">Overview:</div>
                <div className="item__overview--text"> {item.overview}</div>
              </div>
            </div>
          </div>
          <div className="crew">
            <div className="crew__title">Top Billed Cast</div>
            <div className="crew__container">
              <Cast cast={item.credits.cast} />
            </div>
          </div>
          <div className="recommendations">
            <div className="recommendations__title">Recommendations</div>
            <div className="recommendations__container">
              <Recommendations recommendations={item.recommendations.results} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
