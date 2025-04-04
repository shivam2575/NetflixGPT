import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="flex flex-col">
      <Header />
      <MainContainer />
      {/*
          - MainContainer
            - VideoBackground
            - VideoTitle

          - SecondaryContainer
            - movieList * n
              - movieCard * n
      */}
    </div>
  );
};

export default Browse;
