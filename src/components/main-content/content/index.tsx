import React from "react";
import PokedexList from "../pokedexlist";

export interface Components {
  PokedexList: typeof PokedexList;
}

export const mainContent: React.FC<Components> = () => {
  return (
    <div>
      <PokedexList />
    </div>
  );
};
