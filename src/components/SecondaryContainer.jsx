import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const nowPlayingMovies = movies?.nowPlayingMovies;
  const popularMovies = movies?.popularMovies;
  const topRatedMovies = movies?.topRatedMovies;
  const upcomingMovies = movies?.upcomingMovies;
  return (
    nowPlayingMovies &&
    popularMovies && (
      <div className="bg-black">
        <div className="-mt-48 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
