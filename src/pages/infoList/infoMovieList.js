import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACK_IMG_URL, IMG_BIG__URL } from "../../constans/apiUrls";
import { NAVIGATION } from "../../navigator/navigation";
import Loader from "../../components/loader/loader";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { getDate } from "../../components/helpers/helpers";
import heart from "../../assets/heart.svg";
import { getFavorite } from "../../reducers/movieSlice";
import { fetchMovieId } from "../../reducers/action";

const InfoList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesId);
  const isFavorite = useSelector((state) => state.favorite.includes(movies));
  const [infoList, setInfoList] = useState();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (movies) {
      dispatch(fetchMovieId(movies, setInfoList));
    }
  }, [dispatch, movies]);

  const handleFavoriteClick = () => {
    dispatch(getFavorite(movies));
  };

  if (!infoList) {
    return null;
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.info_list}>
          {infoList.backdrop_path ? (
            <img
              className={style.back_img}
              alt={infoList.title}
              src={`${BACK_IMG_URL}/${infoList.backdrop_path}`}
            />
          ) : (
            <div className={style.none_back_img} />
          )}

          <div className={style.content}>
            <img
              className={style.poster_img}
              alt={infoList.title}
              src={`${IMG_BIG__URL}/${infoList.poster_path}`}
            />

            <div className={style.info}>
              <h2 className={style.title}>
                <Link to={`${NAVIGATION.InfoList}`}>{infoList.title}</Link>
              </h2>

              <div className={style.facts}>
                <span>
                  {getDate(infoList.release_date)} (
                  {infoList.original_language.toUpperCase()})
                </span>
                <ul className={style.genres}>
                  {infoList.genres.map((name) => (
                    <li key={name.id}>{name.name}</li>
                  ))}
                </ul>
                <span>{infoList.runtime} m</span>
              </div>

              <div className={style.actions}>
                <span className={style.vote}>
                  {infoList.vote_average.toFixed(1)}
                </span>
                <p>
                  User <br />
                  Score
                </p>
                <div className={style.favorite} onClick={handleFavoriteClick}>
                  <img
                    alt="heart"
                    src={heart}
                    className={`${style.heart} ${isFavorite && style.active}`}
                    id={movies}
                  />
                </div>
              </div>

              <div className={style.header_info}>
                <h3 className={style.tagline}>{infoList.tagline}</h3>
                <h3 className={style.overview}>Overview</h3>
                <p>{infoList.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoList;
