import { useSelector } from "react-redux";
import MovieListCard from "../movieListCard/movieListCard";
import style from "./style.module.css";
import PageNavigation from "../pageNavigation/pageNavigation";
import Loader from "../loader/loader";

const MovieList = ({ showPage, currentPage }) => {
  const movies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);

  const handlePageChange = (newPage) => {
    showPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.container}>
          <div className={style.list_movie}>
            {movies &&
              movies?.results.map((movie) => (
                <MovieListCard key={movie.id} movie={movie} />
              ))}
          </div>
          <div className={style.list_page}>
            {movies && (
              <PageNavigation
                currentPage={currentPage}
                totalPages={20}
                onPageClick={handlePageChange}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
