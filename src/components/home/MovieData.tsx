import * as React from "react";
import "./MovieData.scss";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

interface Props {
  key: number;
  poster_path: string;
  title: string;
  vote_average: string;
}

export const MovieData: React.FC<Props> = ({ poster_path, title }: Props) => {
  console.log();
  return (
    <div className="movies">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movies__info">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
