import * as React from "react";
/* import "./MovieData.scss"; */

const IMG_API = "https://image.tmdb.org/t/p/w400";

interface Props {
  key: number;
  poster_path: string;
  original_name: string;
  vote_average: string;
}

export const ShowData: React.FC<Props> = ({
  poster_path,
  original_name,
}: Props) => {
  console.log();
  return (
    <div className="series">
      <img src={IMG_API + poster_path} alt={original_name} />
      <div className="series__info">
        <h3>{original_name}</h3>
      </div>
    </div>
  );
};
