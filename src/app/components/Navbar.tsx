import "./component.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ToggleTheme from "./ToggleTheme";
import ToggleFont from "./ToggleFont";

const Navbar = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-row gap-2 min-w-2xl navbar items-center">
        <li className="w-8 h-auto">
          <Link href="/">
            <FontAwesomeIcon icon={faBook} size="2x" />
          </Link>
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
