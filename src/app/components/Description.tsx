"use client";
import "./component.css";
import { useQuery } from "@tanstack/react-query";
import fetchDefinition from "../fetchDefinition";
import Definitions from "./Definition";

const Description = ({ word }: { word: string }) => {
  const { isPending, data, isError } = useQuery({
    queryKey: ["def", word],
    queryFn: () => fetchDefinition(word),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Sorry, word not found...😕</div>;
  }
  const wordData = data[0];
  const mp3 = wordData?.phonetics.filter((obj) => !!obj.audio)[0]?.audio;

  return (
    <div className="w-full my-12">
      <div className="flex lg:flex-row sm:flex-col gap-8 justify-between">
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
        <Definitions wordData={wordData?.meanings[0]} />
        {wordData?.meanings[1] && (
          <Definitions wordData={wordData?.meanings[1]} />
        )}
      </div>
    </div>
  );
};

export default Description;
