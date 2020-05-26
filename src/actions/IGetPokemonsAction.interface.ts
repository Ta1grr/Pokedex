import IPokemons from "../reducers/IPokemons.interface";
import { PokemonsActionTypes } from "./PokemonsActionTypes.enum";

export interface ISetPokemonAction {
  type: PokemonsActionTypes.SET_POKEMON;
  pokemons: IPokemons;
  isFetching: false;
}

export interface ISearchPokemonsAction {
  type: PokemonsActionTypes.SEARCH_POKEMONS;
  term: string;
  isFetching: true;
}

export interface IGetPokemonsAll {
  type: PokemonsActionTypes.GET_ALL_POKEMONS;
  pokemons: IPokemons[];
}

export interface IGetPokemonsStartAction {
  type: PokemonsActionTypes.GET_POKEMONS_START;
  isFetching: true;
}

export interface IGetPokemonsSuccessAction {
  type: PokemonsActionTypes.GET_POKEMON_SUCCESS;
  pokemons: IPokemons[];
  isFetching: false;
}

export interface IGetPokemonsFailureAction {
  type: PokemonsActionTypes.GET_POKEMON_FAILURE;
  isFetching: false;
}
