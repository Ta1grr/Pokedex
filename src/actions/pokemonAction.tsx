export const FETCH_POKEDEX_BEGIN = "FETCH_POKEDEX_BEGIN";
export const FETCH_POKEDEX_SUCCESS = "FETCH_POKEDEX_SUCCESS";
export const FETCH_POKEDEX_FAILURE = "FETCH_POKEDEX_FAILURE";

export const fetchPokedexBegin = () => ({
  type: FETCH_POKEDEX_BEGIN,
});

export const fetchPokedexSuccess = (pokemons: any) => ({
  type: FETCH_POKEDEX_SUCCESS,
  payload: { pokemons },
});

export const fetchPokedexFailure = (error: any) => ({
  type: FETCH_POKEDEX_FAILURE,
  payload: { error },
});

const handleErrors = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

//GET
export const getPokemons = async () => {
  try {
    const url = "https://pokeapi.co/api/v2/type/fire";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return function (err: any) {
      console.log("Error: ", err);
    };
  }
};
