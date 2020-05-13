export const FETCH_POKEDEX_BEGIN = "FETCH_POKEDEX_BEGIN";
export const FETCH_POKEDEX_SUCCESS = "FETCH_POKEDEX_SUCCESS";
export const FETCH_POKEDEX_FAILURE = "FETCH_POKEDEX_FAILURE";

export const fetchPokedexBegin = () => ({
  type: FETCH_POKEDEX_BEGIN,
});

export const fetchPokedexSuccess = (pokemon: any) => ({
  type: FETCH_POKEDEX_SUCCESS,
  payload: { pokemon },
});

export const fetchPokedexFailure = (error: any) => ({
  type: FETCH_POKEDEX_FAILURE,
  payload: { error },
});

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

export const getPokemons = () => {
  return (dispatch: any) => {
    dispatch(fetchPokedexBegin());
    return async function () {
      try {
        const url = "https://pokeapi.co/api/v2/type/fire";
        const response = await fetch(url);
        const data = await response.json();
        dispatch(fetchPokedexSuccess(data));
        console.log("POKEMON DATA: ", data.pokemon);
        return data.pokemon;
      } catch (err) {
        console.log("Error: ", err);
      }
    };
  };
};
