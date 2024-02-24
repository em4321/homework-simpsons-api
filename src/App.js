import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import Spinner from "./components/Spinner";
import "./App.modules.css";
import { Routes, Route, Link } from "react-router-dom";
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

  onDeleteCharacter = (quote) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.quote === quote);
    simpsons.splice(index, 1);
    this.setState({ simpsons });
  };
  onLikeCharacter = (quote) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.quote === quote);
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
        <div>
          <nav
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <Link
              style={{
                marginRight: "20px",
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{
                marginRight: "20px",
              }}
              to="about"
            >
              About
            </Link>
            <Link to="contact">Contact</Link>
          </nav>
        </div>

        <header>
          <h1>The Simpsons Quotes</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Interface
                  total={total}
                  simpsons={this.state.simpsons}
                  onDeleteCharacter={this.onDeleteCharacter}
                  onLikeCharacter={this.onLikeCharacter}
                />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
