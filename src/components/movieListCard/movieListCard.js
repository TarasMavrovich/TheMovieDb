import { IMG_URL } from "../../constans/apiUrls";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite, getMovieId } from "../../reducers/movieSlice";
import { NAVIGATION } from "../../navigator/navigation";
import { Link } from "react-router-dom";
import heart from "../../assets/heart.svg";

const MovieListCard = ({ movie }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorite.includes(movie.id));

  const { title, vote_average, poster_path, release_date, id } = movie;

  const handleCardClick = () => {
    dispatch(getMovieId(id));
  };

  const handleFavoriteClick = () => {
    dispatch(getFavorite(id));
  };

  return (
    <div className={style.list}>
      {poster_path && (
        <>
          <div className={style.img_content}>
            <img
              alt="heart"
              src={heart}
              className={`${style.heart} ${isFavorite && style.active}`}
              id={id}
              onClick={handleFavoriteClick}
            />

            <Link to={`${NAVIGATION.InfoList}`}>
              <img
                onClick={handleCardClick}
                className={style.img}
                alt={title}
                src={`${IMG_URL}/${poster_path}`}
              />
            </Link>
          </div>
          <div className={style.content}>
            <p className={style.vote}>{vote_average.toFixed(1)}</p>
            <Link className={style.title} to={`${NAVIGATION.InfoList}`}>
              {title}
            </Link>
            <p className={style.date}>{release_date}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieListCard;
