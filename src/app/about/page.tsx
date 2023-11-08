import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "@/app/globals.css";
const AboutPage = () => {
  return (
    <main
      id="main"
      className="flex flex-col gap-10 items-center justify-center min-h-screen"
    >
      <h1 className="text-4xl">About Page</h1>
      <p className="text-xl">
        Here are some fun facts about the Dictionary app.
      </p>
      <ul className="text-xl flex flex-col gap-6">
        <li>
          <i className="mr-4">
            <FontAwesomeIcon icon={faCheck} style={{ color: "	#7E22CE" }} />
          </i>
          Built with NextJS
        </li>
        <li>
          <i className="mr-4">
            <FontAwesomeIcon icon={faCheck} style={{ color: "	#7E22CE" }} />
          </i>
          Utilizes the Dictionary API
        </li>
        <li>
          <i className="mr-4">
            <FontAwesomeIcon icon={faCheck} style={{ color: "	#7E22CE" }} />
          </i>
          Uses React Query for fetching the API
        </li>
        <li>
          <i className="mr-4">
            <FontAwesomeIcon icon={faCheck} style={{ color: "	#7E22CE" }} />
          </i>
          FontAwesome for the awesome fonts
        </li>
      </ul>
    </main>
  );
};

export default AboutPage;
