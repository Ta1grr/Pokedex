import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import MainContent from "./components/main-content/content/index";
import PokedexList from "./components/main-content/pokedexlist/index";

interface IAppProps {
  //stuff
}

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <PokedexList />
    </div>
  );
};

export default App;
