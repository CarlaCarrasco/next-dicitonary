import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <div className="flex w-full mb-2 bg-slate-100 p-3 my-10">
      <input
        className="font-bold text-2xl w-full p-2 outline-none border-none bg-slate-100"
        type="text"
        placeholder="Search a word..."
        name="usrnm"
      ></input>
      <i className="p-2 w-12">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
    </div>
  );
};

export default SearchBar;
