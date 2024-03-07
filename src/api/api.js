import { baseURL } from "../constans/apiUrls.js";
import { API_KEY } from "../constans/apiKey.js";

async function getMovies(type, page) {
  const response = await fetch(
    `${baseURL}/movie/${type}?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();

  return data;
}

async function searchMovie(query) {
  const response = await fetch(
    `${baseURL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();

  return data;
}

async function getMovieById(movieId) {
  const response = await fetch(
    `${baseURL}/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();

  return data;
}

export { getMovies, searchMovie, getMovieById };
