import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMovieById } from "../../api/api";
import MovieListCard from "../../components/movieListCard/movieListCard";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { navigation_page } from "../../navigator/navigation";

const FavoriteMovies = () => {
  const [infoList, setInfoList] = useState([]);
  const favoriteMovies = useSelector((state) => state.favorite);

  useEffect(() => {
    if (favoriteMovies) {
      const fetchMovieList = async () => {
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
      fetchMovieList();
    }
  }, [favoriteMovies]);

  if (!favoriteMovies && favoriteMovies.length < 1) {
    return null;
  }

  return (
    <div className={style.container}>
      <div className={style.list_favorite_movie}>
        {infoList.length > 0 ? (
          infoList.map((movie) => (
            <MovieListCard key={movie.id} movie={movie} />
          ))
        ) : (
          <Link
            to={navigation_page.start_page}
            className={style.button_favorite_movies}
          >
            <div className={style.content}>
              +<p>Added favorite films</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FavoriteMovies;
