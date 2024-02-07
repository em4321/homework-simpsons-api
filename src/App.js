import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import "./App.modules.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }
  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ simpsons: data });
  };

  onDeleteCharacter = (character) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.character === character);
    simpsons.splice(index, 1);
    this.setState({ simpsons });
  };
  render() {
    console.log(this.state);
    if (!this.state.simpsons) {
      return <Spinner />;
    }
    return (
      <Interface
        simpsons={this.state.simpsons}
        onDeleteCharacter={this.onDeleteCharacter}
      />
    );
  }
}

export default App;
