import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import "./App.modules.css";
import Controls from "./components/Controls";

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
  onLikeCharacter = (name) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.character === name);
    simpsons[index].liked = !simpsons[index].liked;
    this.setState({ simpsons });
  };

  render() {
    console.log(this.state);
    if (!this.state.simpsons) {
      return (
        <div
          className="loading"
          style={{
            marginTop: "300px",
          }}
        >
          <h1>Loading Quotes...</h1>
          <Spinner />
        </div>
      );
    }
    const { simpsons, sortSelect } = this.state;

    let sortedCharacters = [...simpsons];

    sortedCharacters = sortedCharacters.sort((a, b) => {
      if (a.character > b.character) {
        return 1;
      }
      if (b.character > a.character) {
        return -1;
      }
      return 0;
    });

    if (sortSelect === "Z-A") {
      sortedCharacters.reverse();
    }
    let total = 0;
    this.state.simpsons.forEach((item) => {
      if (item.liked) {
        total++;
      }
    });
    return (
      <>
        <header>
          <h1>The Simpsons Quotes</h1>
        </header>
        <main>
          <Controls onSortSelect={this.onSortSelect} />
          <Interface
            total={total}
            simpsons={this.state.simpsons}
            onDeleteCharacter={this.onDeleteCharacter}
            onLikeCharacter={this.onLikeCharacter}
          />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
