const Definitions = ({ wordData }) => {
  console.log(wordData);
  return (
    <div className="mb-8">
      <div className="flex flex-row items-center gap-4">
        <h3 className="font-bold italic">{wordData.partOfSpeech}</h3>
        <span className="border border-slate-200 w-full h-px"></span>
      </div>
      <h3 className="mt-4">Meaning</h3>
      <ul className="meaning mt-4 pl-4 flex flex-col gap-4">
        {wordData?.definitions?.map((data, i) => {
          return <li key={`${i}-${wordData?.word}`}>{data?.definition}</li>;
        })}
      </ul>
      {wordData?.synonyms?.length >= 1 && (
        <p className="mt-8">
          Synonyms{" "}
          <span className="text-purple-700 font-bold">
            {wordData?.synonyms.join(", ")}
          </span>
        </p>
      )}
    </div>
  );
};

export default Definitions;
