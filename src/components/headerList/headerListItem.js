import { Link } from "react-router-dom";
import { navigation_page } from "../../navigator/navigation";

const HeaderListItem = ({ typeItem, handleHideMovies }) => {
  const { type, name } = typeItem;

  return (
    <Link
      to={navigation_page.start_page}
      onClick={() => handleHideMovies(type)}
    >
      {name}
    </Link>
  );
};

export default HeaderListItem;
