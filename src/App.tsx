import React from "react";
import "./App.css";
import PokedexList from "./components/main-content/pokedexlist/index";

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <PokedexList />
    </div>
  );
};

export default App;
