import { BASE_URL } from "../constans/apiUrls";
import { API_KEY } from "../constans/apiKey";

async function getMovies(type, page) {
  const response = await fetch(
    `${BASE_URL}/movie/${type}?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();

  return data;
}

async function searchMovie(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();

  return data;
}

async function getMovieById(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();

  return data;
}

export { getMovies, searchMovie, getMovieById };
