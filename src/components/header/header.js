import Search from "../search/search";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { type } from "../../constans/type";
import { navigation_page } from "../../navigator/navigation";

const Header = ({ showUrl, showPage }) => {
  const handleHideMovies = (type) => {
    showUrl(type.base);
    showPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.header}>
      <div className={style.nav_wrapper}>
        <div className={style.header_name}>
          <Link
            to={navigation_page.start_page}
            onClick={() => handleHideMovies(type.popular)}
          >
            KinoOnline
          </Link>
        </div>

        <nav>
          <ul className={style.header_list}>
            <li className={style.header_list_item}>
              <Link
                to={navigation_page.start_page}
                onClick={() => handleHideMovies(type.popular)}
              >
                Popular
              </Link>
            </li>
            <li className={style.header_list_item}>
              <Link
                to={navigation_page.start_page}
                onClick={() => handleHideMovies(type.top)}
              >
                Top
              </Link>
            </li>
            <li className={style.header_list_item}>
              <Link
                to={navigation_page.start_page}
                onClick={() => handleHideMovies(type.upcoming)}
              >
                Upcoming
              </Link>
            </li>
            <li className={style.header_list_item}>
              <Link to={navigation_page.favorite_movie}>Favorite</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={style.flex}>
        <Search />
        {/* <button className={style.button}>Sign In</button> */}
        {/* <button className={style.button}>Switch</button> */}
      </div>
    </div>
  );
};

export default Header;
