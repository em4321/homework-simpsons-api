import React, { Component } from "react";
import "./Characters.modules.css";

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
      <>
        <div className="character" key={character}>
          {/* <div className="character2"> */}
          <h1
            style={{
              textAlign: "center",
              backgroundColor: "#efcba4",
            }}
          >
            {character.toUpperCase()}
          </h1>
          <img className={characterDirection} src={image} alt={character} />

          {/* </div> */}
          <h3>..."{quote}"</h3>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#f5f580" }}
              onClick={() => onDeleteCharacter(character)}
            >
              Delete
            </button>
            <button
              style={{
                backgroundColor: liked ? "#f66e85" : "#f5f580",
              }}
              onClick={() => onLikeCharacter(character)}
            >
              Like
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Characters;
