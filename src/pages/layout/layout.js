import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, searchMovie } from "../../api/api";
import { getMovie } from "../../reducers/movieSlice";
import Header from "../../components/header/header";
import { Outlet } from "react-router";

const Layout = ({ url, setUrl, page, setPage }) => {
  const dispatch = useDispatch();
  const searchMovies = useSelector((state) => state.searchMovie);

  useEffect(() => {
    const fetchMovieList = async () => {
      if (searchMovies.length < 1) {
        try {
          const data = await getMovies(url, page);
          dispatch(getMovie(data));
        } catch (error) {
          console.error("Error fetching weather data: ", error);
        }
      } else {
        try {
          const data = await searchMovie(searchMovies);
          dispatch(getMovie(data));
        } catch (error) {
          console.error("Error fetching weather data: ", error);
        }
      }
    };
    fetchMovieList();
  }, [dispatch, url, page, searchMovies]);

  return (
    <div>
      <Header showUrl={setUrl} showPage={setPage} />
      <Outlet />
    </div>
  );
};

export default Layout;
