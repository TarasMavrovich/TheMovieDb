import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/header";
import { Outlet } from "react-router";
import { fetchMovies } from "../../reducers/action";

const Layout = ({ url, setUrl, page, setPage }) => {
  const dispatch = useDispatch();
  const searchMovies = useSelector((state) => state.searchMovie);

  useEffect(() => {
    dispatch(fetchMovies(url, page, searchMovies));
  }, [dispatch, url, page, searchMovies]);

  return (
    <div>
      <Header showUrl={setUrl} showPage={setPage} />
      <Outlet />
    </div>
  );
};

export default Layout;
