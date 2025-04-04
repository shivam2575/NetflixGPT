import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovieList = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await response.json();
    console.log(jsonData);
    dispatch(addNowPlayingMovies(jsonData.results));
  };
  useEffect(() => {
    getNowPlayingMovieList();
  }, []);
};

export default useNowPlayingMovies;
