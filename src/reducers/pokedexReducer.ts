import { Reducer } from "redux";
import IPokemons from "./IPokemons.interface";
// import { PokemonActions, PokemonActionTypes } from "../actions/pokemonAction";

import PokemonActions from "../actions/PokemonsAction.type";
import { PokemonsActionTypes } from "../actions/PokemonsActionTypes.enum";

export interface IPokemonsState {
  readonly pokedexData: IPokemons[];
  loading: boolean;
  error: null;
  lastSearchedPokemon: [];
  pokemon: undefined;
}

const initialPokemonState: IPokemonsState = {
  pokemon: undefined,
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
    case PokemonsActionTypes.GET_ALL_POKEMONS: {
      return {
        ...state,
        pokedexData: action.pokemons,
      };
    }
    case PokemonsActionTypes.SET_POKEMON: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
