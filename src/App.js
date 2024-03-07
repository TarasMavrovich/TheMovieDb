import { Route, Routes } from "react-router";
import "./App.css";
import InfoList from "./pages/infoList/infoMovieList.js";
import Layout from "./pages/layout/layout.js";
import MovieList from "./components/movieList/movieList.js";
import { useState } from "react";
import { type } from "./constans/type.js";
import { navigation_page } from "./navigator/navigation.js";
import FavoriteMovies from "./pages/favoriteMovies/favoriteMovies.js";

function App() {
  const [url, setUrl] = useState(type.popular.base);
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
