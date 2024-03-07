import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { getSearchMovie } from "../../reducers/movieSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchMovie(search));
  }, [search, dispatch]);

  const handleSearchClick = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          className={style.search}
          placeholder="Search movie . . ."
          onChange={handleSearchClick}
          value={search}
        />
      </div>
    </div>
  );
};

export default Search;
