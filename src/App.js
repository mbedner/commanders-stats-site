import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import StatsContainer from "./components/StatsContainer";

import player from "./player.png";

function App() {
  const year = "2021";
  return (
    <div className="relative p-4 mb-12">
      <Nav />
      <div className="container m-auto relative">
        <Hero year={year} />
        <StatsContainer year={year} />
      </div>
      <img
        src={player}
        alt="t-mac"
        className="absolute 2xl:right-40 lg:right-12 bottom-0 lg:h-[75%] xl:h-[85%] xl:block hidden"
      />
    </div>
  );
}

export default App;
