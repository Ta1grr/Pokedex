import { Reducer } from "redux";

import {
  PokemonActions,
  PokemonActionTypes,
  // FETCH_POKEDEX_BEGIN,
  // FETCH_POKEDEX_SUCCESS,
  // FETCH_POKEDEX_FAILURE,
} from "../actions/pokemonAction";

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
}

const initialPokemonState: IPokemonsState = {
  pokedexData: [],
  loading: false,
  error: null,
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
    // case FETCH_POKEDEX_BEGIN:
    //   return {
    //     ...state,
    //     pokedexData: action.payload.pokemon,
    //     loading: true,
    //     error: null,
    //   };

    // case FETCH_POKEDEX_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     pokedexData: action.payload.pokemon,
    //   };

    // case FETCH_POKEDEX_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload.error,
    //     pokedexData: [],
    //   };

    default:
      return state;
  }
};
