import React from "react";
import "./App.css";
import PokedexList from "./components/main-content/pokedexlist/index";
import { SearchBar } from "./components/top-content/search";

export const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <PokedexList />
      {/* <SearchBar searchPokemons={}/> */}
    </div>
  );
};

export default App;
