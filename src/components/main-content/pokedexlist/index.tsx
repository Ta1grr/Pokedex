import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../../store";
import { IPokemons } from "../../../reducers/pokedexReducer";

interface IPokedexListProps {
  pokemons: IPokemons[];
}

export const PokedexList: React.FC<IPokedexListProps> = (props) => {
  const { pokemons } = props;
  return (
    <div>
      {pokemons.map((pokemon) => {
        return <span>{pokemon.name}</span>;
      })}
    </div>
  );
};

const mapStateToProps = (store: IAppState) => {
  return {
    pokemons: store.pokemonState.pokedexData,
  };
};

export default connect(mapStateToProps)(PokedexList);
