import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { IPokemons, IPokemonsState } from "../reducers/pokedexReducer";

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

// export const fetchPokedexBegin = () => ({
//   type: FETCH_POKEDEX_BEGIN,
// });

// export const fetchPokedexSuccess = (pokemon: any) => ({
//   type: FETCH_POKEDEX_SUCCESS,
//   payload: { pokemon },
// });

// export const fetchPokedexFailure = (error: any) => ({
//   type: FETCH_POKEDEX_FAILURE,
//   payload: { error },
// });

//GET
// export const getPokemons = async () => {
//   try {
//     const url = "https://pokeapi.co/api/v2/type/fire";
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     return function (err: any) {
//       console.log("Error: ", err);
//     };
//   }
// };

// export const getPokemons = () => {
//   return (dispatch: any) => {
//     dispatch(fetchPokedexBegin());
//     return async function () {
//       try {
//         const url = "https://pokeapi.co/api/v2/type/fire";
//         const response = await fetch(url);
//         const data = await response.json();
//         dispatch(fetchPokedexSuccess(data));
//         console.log("POKEMON DATA: ", data.pokemon);
//         return data.pokemon;
//       } catch (err) {
//         console.log("Error: ", err);
//       }
//     };
//   };
// };
