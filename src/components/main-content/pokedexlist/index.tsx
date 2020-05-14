import React, { Component } from "react";
import { connect } from "react-redux";
import { getPokemons } from "../../../actions/pokemonAction";
// import { Pokedexcard } from "../pokedexcard";

interface PokeAPIData {
  name: string;
  url: string;
}

interface PokedexListProps {
  getPokemons: typeof getPokemons;
  pokedexData: PokeAPIData[];
  id: any;
  key: any;
  error: string;
  loading: boolean;
}

class PokedexList extends Component<PokedexListProps> {
  componentDidMount() {
    this.props.getPokemons();
    console.log(this.props.getPokemons());
  }

  render() {
    const { error, loading, pokedexData } = this.props;

    if (error) {
      return <div>Error! {error}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {pokedexData.map((data: any) => (
          <li key={data.url}>{data.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (pokedexReducer: any) => ({
  pokemons: pokedexReducer.pokedexData,
  loading: pokedexReducer.pokedexData.loading,
  error: pokedexReducer.pokedexData.error,
});

export default connect(mapStateToProps)(PokedexList);
