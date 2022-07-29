import React from "react";
import "./ShowsBody.scss";
import { Link } from "react-router-dom";
import { ShowData } from "./ShowData";

const IMG_API = "https://image.tmdb.org/t/p/w400";

export const ShowsBody = ({ shows }) => {
  console.log(shows);
  return (
    <div className="shows-collection">
      <div className="shows-collection__container">
        {shows.length > 0 &&
          shows.map((show) => (
            <div>
              <Link
                to={`/show/${show.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>
                  <ShowData key={show.id} {...show} />
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
