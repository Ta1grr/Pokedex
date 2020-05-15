import React from "react";
import { connect } from "react-redux";
import { getPokemons } from "../../../actions/pokemonAction";
import { PokedexList } from "../pokedexlist/index";

interface PokeAPIData {
  name: string;
  url: string;
}

export interface mainContentProps {
  getPokemons: typeof getPokemons;
  pokedexData: PokeAPIData[];
  dispatch: () => {};
  pokemons: PokeAPIData[];
  error: any;
  loading: any;
  // PokedexList?: typeof PokedexList;
  // PokeData?: any;
  // getPokemons?: () => void;
  // pokedexData?: {};
  // key?: any;
  // ref?: any;
  // id?: any;
}

class MainContent extends React.Component<mainContentProps> {
  state = {
    pokedata: [],
  };

  componentDidMount() {
    this.props.dispatch(getPokemons());
    console.log(this.props.getPokemons());
  }

  render() {
    const { error, loading, pokemons } = this.props;

    if (error) {
      return <div>Error! {error}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <PokedexList pokeData={pokedexData} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokedexData,
  loading: state.pokedexData.loading,
  error: state.pokedexData.error,
});

export default connect(mapStateToProps)(MainContent);
