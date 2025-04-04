import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    remove: (state, action) => {},
  },
});

export const { addNowPlayingMovies, remove } = movieSlice.actions;
export default movieSlice.reducer;
