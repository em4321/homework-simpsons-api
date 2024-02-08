import React, { Component } from "react";

class Characters extends Component {
  render() {
    const {
      character,
      characterDirection,
      image,
      quote,
      onDeleteCharacter,
      onLikeCharacter,
      liked,
    } = this.props;
    return (
      <div className="character" key={character}>
        <h1>{character.toUpperCase()}...</h1>
        <h3>..."{quote}"</h3>
        <img className={characterDirection} src={image} alt={character} />
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => onDeleteCharacter(character)}
        >
          Delete
        </button>
        <button
          style={{
            backgroundColor: liked ? "red" : "pink",
          }}
          onClick={() => onLikeCharacter(character)}
        >
          Like
        </button>
      </div>
    );
  }
}

export default Characters;
