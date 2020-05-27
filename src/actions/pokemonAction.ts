import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import IPokemons from "../reducers/IPokemons.interface";
import { IPokemonsState } from "../reducers/pokedexReducer";

export enum PokemonActionTypes {
  GET_ALL = "GET_ALL",
}

export interface IPokemonGetAllAction {
  type: PokemonActionTypes.GET_ALL;
  pokemons: IPokemons[];
}

export type PokemonActions = IPokemonGetAllAction;

export const getAllPokemons: ActionCreator<ThunkAction<
  Promise<any>,
  IPokemonsState,
  null,
  IPokemonGetAllAction
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        pokemons: data.results,
        type: PokemonActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
