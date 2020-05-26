import {
  ISetPokemonAction,
  ISearchPokemonsAction,
  IGetPokemonsStartAction,
  IGetPokemonsSuccessAction,
  IGetPokemonsFailureAction,
} from "./IGetPokemonsAction.interface";

type PokemonActions =
  | ISetPokemonAction
  | ISearchPokemonsAction
  | IGetPokemonsStartAction
  | IGetPokemonsSuccessAction
  | IGetPokemonsFailureAction;

export default PokemonActions;
