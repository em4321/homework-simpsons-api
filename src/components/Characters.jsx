import React, { Component } from "react";
import "./Characters.modules.css";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

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
          <div className="nameAndButtons">
            <h1
              className="characterName"
              style={{
                textAlign: "center",
                backgroundColor: "#efcba4",
              }}
            >
              {character.toUpperCase()}
            </h1>

            <button
              style={{ backgroundColor: "#f5f580" }}
              onClick={() => onDeleteCharacter(quote)}
            >
              <FaRegTrashAlt className="trash" />
            </button>
            <button
              style={{
                backgroundColor: liked ? "#f66e85" : "#f5f580",
              }}
              onClick={() => onLikeCharacter(quote)}
            >
              <FaRegThumbsUp
                className="thumbsUp"
                style={{
                  backgroundColor: liked ? "#f66e85" : "#f5f580",
                }}
              />
            </button>
          </div>
          <img className={characterDirection} src={image} alt={character} />

          <h3>..."{quote}"</h3>
        </div>
      </>
    );
  }
}

export default Characters;
