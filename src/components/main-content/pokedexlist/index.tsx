import React from "react";
// import { connect } from "react-redux";
// import { getPokemons } from "../../../actions/pokemonAction";
// import { Pokedexcard } from "../pokedexcard";

interface PokedexListProps {
  pokeData: any;
  pokemons: any;
}

export const PokedexList: React.FC<PokedexListProps> = () => {
  return (
    <ul>
      {pokedexData.map((data: any) => {
        <li key={data.url}>{data.name}</li>;
      })}
    </ul>
  );
};
