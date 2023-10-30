import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ToggleTheme from "./ToggleTheme";
import ToggleFont from "./ToggleFont";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-2 min-w-2xl navbar">
        <li className="w-8">
          <FontAwesomeIcon icon={faBook} />
        </li>
        <li className="ml-auto">
          <ToggleFont />
        </li>
        <li className="ml-4">
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
