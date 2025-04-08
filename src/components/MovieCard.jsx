import React from "react";
import { IMG_URL_CDN } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  console.log(IMG_URL_CDN + posterPath);
  return (
    <div className="w-48 pr-4 hover:shadow-lg hover:scale-90 transition-transform duration-300">
      <img
        className="rounded-lg cursor-pointer"
        src={IMG_URL_CDN + posterPath}
        alt="Movie poster"
      />
    </div>
  );
};

export default MovieCard;
