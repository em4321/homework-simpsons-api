import React, { Component } from "react";

class Characters extends Component {
  render() {
    console.log(this.props);
    const { character, characterDirection, image, quote, onDeleteCharacter } =
      this.props;
    return (
      <div key={character}>
        <h1>{character}</h1>
        <h2>"{quote}"</h2>

        <img src={image} alt={characterDirection} />
        <button onClick={() => onDeleteCharacter(character)}>Delete</button>
      </div>
    );
  }
}

export default Characters;
