import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "@/app/globals.css";
const AboutPage = () => {
  const CheckMark = () => (
    <i className="mr-4">
      <FontAwesomeIcon icon={faCheck} style={{ color: "	#7E22CE" }} />
    </i>
  );
  return (
    <div
      id="about"
      className="flex flex-col gap-10 items-center justify-center mt-24"
    >
      <h1 className="text-4xl">About</h1>
      <p className="text-xl">A few things to know about this app.</p>
      <ul className="text-xl flex flex-col gap-10">
        <li>
          <CheckMark />
          Built with{" "}
          <Link href="https://nextjs.org/" target="true">
            NextJS
          </Link>
        </li>
        <li>
          <CheckMark />
          Utilizes the{" "}
          <Link href="https://dictionaryapi.dev/" target="true">
            Dictionary API
          </Link>
        </li>
        <li>
          <CheckMark />
          Uses{" "}
          <Link href="https://tanstack.com/query/v3/" target="true">
            React
          </Link>{" "}
          Query for fetching the API
        </li>
        <li>
          <CheckMark />
          <Link href="https://fontawesome.com/" target="true">
            FontAwesome
          </Link>{" "}
          for the awesome icons
        </li>
        <li>
          <CheckMark />
          Inspired by{" "}
          <Link
            href="https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL"
            target="true"
          >
            FrontEnd Mentor
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
