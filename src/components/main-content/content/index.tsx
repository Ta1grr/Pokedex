import React from "react";
import PokedexList from "../pokedexlist";

export interface mainContentProps {
  PokedexList: typeof PokedexList;
  PokeData: any;
  getPokemons: () => void;
  pokedexData: {};
  key: any;
  ref: any;
  id: any;
}

export const mainContent: React.FC<mainContentProps> = () => {
  return (
    <div>
      <PokedexList />
    </div>
  );
};
