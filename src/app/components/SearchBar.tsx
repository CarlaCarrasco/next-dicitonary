"use client";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // get word from input
  // update the context to store word
  // get updated context in the definition component
  // fetch word definition from api inside definition component
  // display results on ui
  return (
    <div className="flex w-full mb-2 bg-slate-100 p-3 my-12">
      <input
        className="font-bold text-2xl text-purple-700 w-full p-2 outline-none border-none bg-slate-100"
        type="text"
        placeholder="Search a word..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTheme({ ...theme, word: e.currentTarget.value });
          }
        }}
      ></input>
      <i className="p-2 w-12">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
    </div>
  );
};

export default SearchBar;
