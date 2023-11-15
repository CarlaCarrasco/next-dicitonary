import Description from "@/app/components/Description";

const Page = ({ params }: { params: { word: string } }) => {
  return (
    <div>
      <h1>{params.word}</h1>
      <Description word={params.word} />
    </div>
  );
};

export default Page;
