"use client";
import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import fetchDefinition from "../fetchDefinition";

const Description = () => {
  const { theme } = useContext(ThemeContext);
  const { isPending, data } = useQuery({
    queryKey: ["def", theme.word],
    queryFn: () => fetchDefinition(theme.word),
  });
  if (isPending) {
    return <div>Loading...</div>;
  }
  const wordData = data[0];
  console.log({ wordData });
  return (
    <div className="w-full my-12">
      <div className="flex flex-row justify-between">
        <h1 className="text-5xl font-semibold">{wordData.word}</h1>
        <i className="w-12 bg-purple-200 circle p-4">
          <FontAwesomeIcon icon={faPlay} />
        </i>
      </div>
      <div className="mt-8">
        <div className="flex flex-row items-center gap-4">
          <h3 className="font-bold italic">noun</h3>
          <span className="border border-slate-200 w-full h-px"></span>
        </div>
        <h3 className="mt-4">Meaning</h3>
        <ul className="meaning mt-4 pl-4 flex flex-col gap-4">
          {wordData.meanings[0].definitions?.map((data, i) => {
            return <li key={`${i}-${wordData.word}`}>{data?.definition}</li>;
          })}
        </ul>
        <p className="mt-8">
          Synonyms{" "}
          <span className="text-purple-700 font-bold">
            {wordData.meanings[0].synonyms.join(", ")}
          </span>
        </p>
      </div>
      <div className="mt-8">
        <div className="flex flex-row items-center gap-4">
          <h3 className="font-bold italic">verb</h3>
          <span className="border border-slate-200 w-full h-px"></span>
        </div>
        <h3 className="mt-4">Meaning</h3>
        <ul className="meaning mt-4 pl-4 flex flex-col gap-4">
          {wordData.meanings[1]?.definitions?.map((data, i) => {
            return (
              <li
                key={`${i}-${wordData.meanings[1]?.partOfSpeech}-${wordData.meanings[1]}`}
              >
                {data?.definition}
              </li>
            );
          })}
        </ul>
        <p className="mt-8">
          Synonyms{" "}
          <span className="text-purple-700 font-bold">
            {wordData.meanings[1]?.synonyms.join(", ")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Description;
