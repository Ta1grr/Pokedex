import { Reducer } from "redux";
import IPokemons from "./IPokemons.interface";
import { PokemonActions, PokemonActionTypes } from "../actions/pokemonAction";

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
