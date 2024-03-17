import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieListCard from "../../components/movieListCard/movieListCard";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { NAVIGATION } from "../../navigator/navigation";
import { fetchFavoriteMovies } from "../../reducers/action";

const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const [infoList, setInfoList] = useState([]);
  const favoriteMovies = useSelector((state) => state.favorite);

  useEffect(() => {
    if (favoriteMovies) {
      dispatch(fetchFavoriteMovies(favoriteMovies, setInfoList));
    }
  }, [dispatch, favoriteMovies]);

  if (!favoriteMovies?.length) {
    return (
      <div className={style.container}>
        <div className={style.list_favorite_movie}>
          <Link
            to={NAVIGATION.StartPage}
            className={style.button_favorite_movies}
          >
            <div className={style.content}>
              +<p>Added favorite films</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.list_favorite_movie}>
        {infoList?.length > 0 &&
          infoList.map((movie) => (
            <MovieListCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;
