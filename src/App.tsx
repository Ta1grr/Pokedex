import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainContent from "./components/main-content/content/index";
import PokedexList from "./components/main-content/pokedexlist/index";

interface AppProps {
  // MainContent: typeof mainContent;
}

export const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MainContent />
    </div>
  );
};

export default App;
