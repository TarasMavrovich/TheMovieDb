import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    favorite: [],
    movies: null,
    moviesId: null,
    searchMovie: null,
  },
  reducers: {
    getMovie: (state, action) => {
      state.movies = action.payload;
    },
    getMovieId: (state, action) => {
      state.moviesId = action.payload;
    },
    getFavorite: (state, action) => {
      const movieId = action.payload;

      const isAlreadyFavorite = state.favorite.includes(movieId);

      state.favorite = isAlreadyFavorite
        ? state.favorite.filter((id) => id !== movieId)
        : [...state.favorite, movieId];
    },
    getSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
  },
});

export const { getMovie, getMovieId, getFavorite, getSearchMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
