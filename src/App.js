import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import "./App.modules.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

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
  onLikeCharacter = (character) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.character === character);
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

    let total = 0;
    this.state.simpsons.forEach((item) => {
      if (item.liked) {
        total++;
      }
    });

    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <header>
          <h1>The Simpsons Quotes</h1>
        </header>
        <main>
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
