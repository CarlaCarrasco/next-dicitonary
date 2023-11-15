import Description from "@/app/components/Description";

const Page = ({ params }: { params: { word: string } }) => {
  return (
    <div>
      <Description word={params.word} />
    </div>
  );
};

export default Page;
