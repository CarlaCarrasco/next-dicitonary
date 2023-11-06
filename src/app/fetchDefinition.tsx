const fetchDefinition = async (word: string) => {
  // const word = queryKey[1];
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!res.ok) {
    throw new Error("Something is wrong with dictionary api");
  }

  return res.json();
};

export default fetchDefinition;
