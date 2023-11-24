"use client";
import "./component.css";
import { useQuery } from "@tanstack/react-query";
import fetchDefinition from "../fetchDefinition";
import { useState } from "react";

const Description = ({ word }: { word: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { isPending, data } = useQuery({
    queryKey: ["def", word],
    queryFn: () => fetchDefinition(word),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  const wordData = data[0];
  const mp3 = wordData?.phonetics.filter((obj) => !!obj.audio)[0]?.audio;
  console.log({ wordData });

  return (
    <div className="w-full my-12">
      <div className="flex flex-row justify-between">
        <h1 className="text-5xl font-semibold">{wordData?.word}</h1>
        {mp3 && (
          <audio
            controls
            controlsList="nodownload noremoteplayback noplaybackrate"
          >
            <source src={mp3} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      <div className="mt-8">
        <div className="flex flex-row items-center gap-4">
          <h3 className="font-bold italic">noun</h3>
          <span className="border border-slate-200 w-full h-px"></span>
        </div>
        <h3 className="mt-4">Meaning</h3>
        <ul className="meaning mt-4 pl-4 flex flex-col gap-4">
          {wordData?.meanings[0]?.definitions?.map((data, i) => {
            return <li key={`${i}-${wordData?.word}`}>{data?.definition}</li>;
          })}
        </ul>
        <p className="mt-8">
          Synonyms{" "}
          <span className="text-purple-700 font-bold">
            {wordData?.meanings[0]?.synonyms.join(", ")}
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
          {wordData?.meanings[1]?.definitions?.map((data, i) => {
            return (
              <li
                key={`${i}-${wordData?.meanings[1]?.partOfSpeech}-${wordData.meanings[1]}`}
              >
                {data?.definition}
              </li>
            );
          })}
        </ul>
        <p className="mt-8">
          Synonyms{" "}
          <span className="text-purple-700 font-bold">
            {wordData?.meanings[1]?.synonyms.join(", ")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Description;
