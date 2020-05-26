import React, { useState } from "react";

export interface ISearchProps {
  searchPokemons: Function;
}

export const searchBar: React.FC<ISearchProps> = ({
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
          value={searchPokemons}
          onChange={onChangeHandler}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
