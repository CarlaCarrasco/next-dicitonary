import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Description = () => {
  return (
    <div className="w-full my-12">
      <div className="flex flex-row justify-between">
        <h1 className="text-5xl font-semibold">keyword</h1>
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
          <li className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            voluptatibus dolores eaque laborum officiis expedita.
          </li>
          <li className="">
            voluptatum consequatur praesentium totam minima, odit voluptates
            aliquam eius voluptas repellat ullam alias doloribus non.
          </li>
          <li className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            voluptatibus dolores eaque laborum officiis expedita.
          </li>
        </ul>
        <p className="mt-8">
          Synonyms <span className="text-purple-700 font-bold">Lorem</span>
        </p>
      </div>
    </div>
  );
};

export default Description;
