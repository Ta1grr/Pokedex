import { createStore, combineReducers, Store, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { IPokemonsState, pokemonReducer } from "../reducers/pokedexReducer";

export interface IAppState {
  pokemonState: IPokemonsState;
}

const rootReducer = combineReducers<IAppState>({
  pokemonState: pokemonReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
