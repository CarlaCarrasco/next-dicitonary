import Description from "./components/Description";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
export default function Home() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center p-24">
      <Navbar />
      <SearchBar />
      <Description />
      <h1>Dictionary App</h1>
    </main>
  );
}
