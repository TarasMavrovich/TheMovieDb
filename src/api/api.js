import { BASE_URL } from "../constans/apiUrls";
import { API_KEY } from "../constans/apiKey";

async function getMovies(type, page) {
  const url = new URL(`3/movie/${type}`, BASE_URL);
  url.searchParams.append("api_key", API_KEY);
  url.searchParams.append("page", page);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function searchMovie(query) {
  const url = new URL(`3/search/movie`, BASE_URL);
  url.searchParams.append("api_key", API_KEY);
  url.searchParams.append("query", query);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function getMovieById(movieId) {
  const url = new URL(`3/movie/${movieId}`, BASE_URL);
  url.searchParams.append("api_key", API_KEY);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export { getMovies, searchMovie, getMovieById };
