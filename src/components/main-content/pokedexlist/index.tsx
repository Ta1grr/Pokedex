import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../../store";
import IPokemons from "../../../reducers/IPokemons.interface";

interface IPokedexListProps {
  pokemons: IPokemons[];
}

export const PokedexList: React.FC<IPokedexListProps> = (props) => {
  const { pokemons } = props;
  return (
    <ul>
      {pokemons.map((pokemon) => {
        return <li>{pokemon.name}</li>;
      })}
    </ul>
  );
};

const mapStateToProps = (store: IAppState) => {
  return {
    pokemons: store.pokemonState.pokedexData,
  };
};

export default connect(mapStateToProps)(PokedexList);
