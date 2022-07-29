import * as React from "react";
import "./ShowData.scss";

const IMG_API = "https://image.tmdb.org/t/p/w300";

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
    <div className="shows">
      <img src={IMG_API + poster_path} alt={original_name} />
      <div className="shows__info">
        <h3>{original_name}</h3>
      </div>
    </div>
  );
};
