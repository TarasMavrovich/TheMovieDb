import { Link } from "react-router-dom";
import { NAVIGATION } from "../../navigator/navigation";

const HeaderListItem = ({ typeItem, handleHideMovies }) => {
  const { type, name } = typeItem;

  return (
    <Link to={NAVIGATION.StartPage} onClick={() => handleHideMovies(type)}>
      {name}
    </Link>
  );
};

export default HeaderListItem;
