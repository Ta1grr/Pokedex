import { PokemonsActionTypes } from "./PokemonsActionTypes.enum";
import {
  ISetPokemonAction,
  IGetPokemonsAll,
  IGetPokemonsStartAction,
  IGetPokemonsSuccessAction,
  IGetPokemonsFailureAction,
  ISearchPokemonsAction,
} from "./IGetPokemonsAction.interface";
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import IPokemons from "../reducers/IPokemons.interface";
import { IPokemonsState } from "../reducers/pokedexReducer";

export const setPokemonActionCreator = (
  pokemon: IPokemons
): ISetPokemonAction => {
  return {
    type: PokemonsActionTypes.SET_POKEMON,
    pokemons: pokemon,
    isFetching: false,
  };
};

export const searchPokemonsActionCreator = (
  term: string
): ISearchPokemonsAction => {
  return {
    type: PokemonsActionTypes.SEARCH_POKEMONS,
    term,
    isFetching: true,
  };
};

export const IGetAllPokemons: ActionCreator<ThunkAction<
  Promise<any>,
  IPokemonsState,
  null,
  IGetPokemonsAll
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        pokemons: data.results,
        type: PokemonsActionTypes.GET_ALL_POKEMONS,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getPokemonsStartActionCreator = (): IGetPokemonsStartAction => {
  return {
    type: PokemonsActionTypes.GET_POKEMONS_START,
    isFetching: true,
  };
};

export const getPokemonsSuccessActionCreator = (
  pokemons: IPokemons[]
): IGetPokemonsSuccessAction => {
  return {
    type: PokemonsActionTypes.GET_POKEMON_SUCCESS,
    pokemons,
    isFetching: false,
  };
};

export const getPokemonsFailureActionCreator = (): IGetPokemonsFailureAction => {
  return {
    type: PokemonsActionTypes.GET_POKEMON_FAILURE,
    isFetching: false,
  };
};
