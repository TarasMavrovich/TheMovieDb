import { Route, Routes } from "react-router";
import "./App.css";
import InfoList from "./pages/infoList/infoMovieList";
import Layout from "./pages/layout/layout";
import MovieList from "./components/movieList/movieList";
import { useState } from "react";
import { type } from "./constans/type";
import { navigation_page } from "./navigator/navigation";
import FavoriteMovies from "./pages/favoriteMovies/favoriteMovies";

function App() {
  const [url, setUrl] = useState(type[1].type);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Routes>
        <Route
          path={navigation_page.start_page}
          element={
            <Layout url={url} setUrl={setUrl} page={page} setPage={setPage} />
          }
        >
          <Route
            path={navigation_page.start_page}
            element={<MovieList showPage={setPage} currentPage={page} />}
          />
          <Route path={navigation_page.info_list} element={<InfoList />} />
          <Route
            path={navigation_page.favorite_movie}
            element={<FavoriteMovies />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
