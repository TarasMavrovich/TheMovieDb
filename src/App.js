import { Route, Routes } from "react-router";
import "./App.css";
import InfoList from "./pages/infoList/infoMovieList";
import Layout from "./pages/layout/layout";
import MovieList from "./components/movieList/movieList";
import { useState } from "react";
import { type } from "./constans/type";
import { NAVIGATION } from "./navigator/navigation";
import FavoriteMovies from "./pages/favoriteMovies/favoriteMovies";

function App() {
  const [url, setUrl] = useState(type[1].type);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Routes>
        <Route
          path={NAVIGATION.StartPage}
          element={
            <Layout url={url} setUrl={setUrl} page={page} setPage={setPage} />
          }
        >
          <Route
            path={NAVIGATION.StartPage}
            element={<MovieList showPage={setPage} currentPage={page} />}
          />
          <Route path={NAVIGATION.InfoList} element={<InfoList />} />
          <Route path={NAVIGATION.FavoriteMovie} element={<FavoriteMovies />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
