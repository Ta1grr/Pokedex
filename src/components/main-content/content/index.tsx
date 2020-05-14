import React from "react";
import PokedexList from "../pokedexlist/index";

export interface mainContentProps {
  // PokedexList?: typeof PokedexList;
  // PokeData?: any;
  // getPokemons?: () => void;
  // pokedexData?: {};
  // key?: any;
  ref?: any;
  // id?: any;
}

export const MainContent: React.FC<mainContentProps> = () => {
  const pokedexRef = useRef<HTMLHtmlElement>(null);

  return (
    <div>
      <PokedexList ref={pokedexRef}/>
    </div>
  );
};
