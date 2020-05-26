import { Reducer } from "redux";

import { PokemonActions, PokemonActionTypes } from "../actions/pokemonAction";

export interface IPokemons {
  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
}

export interface IPokemonsState {
  readonly pokedexData: IPokemons[];
  loading: boolean;
  error: null;
  lastSearchedPokemon: [];
}

const initialPokemonState: IPokemonsState = {
  pokedexData: [],
  loading: false,
  error: null,
  lastSearchedPokemon: [],
};

export const pokemonReducer: Reducer<IPokemonsState, PokemonActions> = (
  state = initialPokemonState,
  action
) => {
  switch (action.type) {
    case PokemonActionTypes.GET_ALL: {
      return {
        ...state,
        pokedexData: action.pokemons,
      };
    }
    default:
      return state;
  }
};
