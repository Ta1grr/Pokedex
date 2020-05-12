import {
  FETCH_POKEDEX_BEGIN,
  FETCH_POKEDEX_SUCCESS,
  FETCH_POKEDEX_FAILURE,
} from "../actions/pokemonAction";

const initialState = {
  pokemon: [],
  loading: false,
  error: null,
};

export const pokedexReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_POKEDEX_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POKEDEX_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.pokemons,
      };

    case FETCH_POKEDEX_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        pokemon: [],
      };

    default:
      return state;
  }
};
