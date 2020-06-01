import React, { useState } from "react";
import { connect } from "react-redux";
import { IAppState } from "../../../store";

export interface ISearchProps {
  searchPokemons: Function;
}

export const SearchBar: React.FC<ISearchProps> = ({
  searchPokemons,
}: ISearchProps) => {
  const [searchPokemon, setSearchPokemon] = useState("");

  const onChangeHandler = (event: React.ChangeEvent) => {
    const input = (event.target as HTMLInputElement).value;
    setSearchPokemon(input);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    searchPokemons(searchPokemon);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="search"
          placeholder="search"
          value={searchPokemon}
          onChange={onChangeHandler}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const mapStateToProps = (store: IAppState) => {
  return {
    pokemons: store.pokemonState.pokedexData,
  };
};

export default connect(mapStateToProps)(SearchBar);