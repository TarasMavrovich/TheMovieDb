import { getMovieById, getMovies, searchMovie } from "../api/api";
import { getLoading, getMovie } from "./movieSlice";

export const fetchMovies =
  (url, page, searchMoviesState) => async (dispatch) => {
    try {
      dispatch(getLoading(true));
      const data = await (searchMoviesState
        ? searchMovie(searchMoviesState)
        : getMovies(url, page));

      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(getMovie(data));
      dispatch(getLoading(false));
    } catch (error) {
      console.error("Error fetching movie data: ", error);
    }
  };

export const fetchMovieId = (movies, setInfoList) => async (dispatch) => {
  try {
    dispatch(getLoading(true));
    const data = await getMovieById(`${movies}`);

    setInfoList(data);
    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch(getLoading(false));
  } catch (error) {
    console.error("Error fetching movie data: ", error);
  }
};

export const fetchFavoriteMovies =
  (favoriteMovies, setInfoList) => async () => {
    try {
      const movieDetailsPromises = favoriteMovies.map(async (id) => {
        return await getMovieById(id);
      });
      const movieDetails = await Promise.all(movieDetailsPromises);
      setInfoList(movieDetails);
    } catch (error) {
      console.error("Error fetching movie data: ", error);
    }
  };
