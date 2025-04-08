import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovieList = async () => {
    const response = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
    const jsonData = await response.json();
    console.log("inside useNowPlayingMovies" + jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };
  useEffect(() => {
    getNowPlayingMovieList();
  }, []);
};

export default useNowPlayingMovies;
