import Search from "../search/search";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { type } from "../../constans/type";
import { navigation_page } from "../../navigator/navigation";
import HeaderListItem from "../headerList/headerListItem";

const Header = ({ showUrl, showPage }) => {
  const handleHideMovies = (type) => {
    console.log(type);
    showUrl(type);
    showPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.header}>
      <div className={style.nav_wrapper}>
        <nav>
          <ul className={style.header_list}>
            {type.map((item, index) => (
              <li className={style.header_list_item} key={index}>
                <HeaderListItem
                  typeItem={item}
                  handleHideMovies={handleHideMovies}
                />
              </li>
            ))}

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
