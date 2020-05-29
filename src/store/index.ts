import { createStore, combineReducers, Store, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { IPokemonsState, pokemonReducer } from "../reducers/pokedexReducer";

export interface IAppState {
  pokemonState: IPokemonsState;
}

const rootReducer = combineReducers<IAppState>({
  pokemonState: pokemonReducer,
});

const ReduxDevTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, compose(applyMiddleware(thunk), ReduxDevTools));
  return store;
}
