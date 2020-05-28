import {
  ISetPokemonAction,
  ISearchPokemonsAction,
  IGetPokemonsStartAction,
  IGetPokemonsSuccessAction,
  IGetPokemonsFailureAction,
  IGetPokemonsAll,
} from "./IGetPokemonsAction.interface";

type PokemonActions =
  | ISetPokemonAction
  | ISearchPokemonsAction
  | IGetPokemonsStartAction
  | IGetPokemonsSuccessAction
  | IGetPokemonsFailureAction
  | IGetPokemonsAll;

export default PokemonActions;
