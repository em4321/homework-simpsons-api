import React, { Component } from "react";
import Characters from "./Characters";

class Interface extends Component {
  render() {
    return (
      <>
        <p>Total Simpsons Characters: {this.props.simpsons.length}</p>
        {this.props.simpsons.map((item, index) => {
          //Create children
          return (
            <Characters
              {...item}
              onDeleteCharacter={this.props.onDeleteCharacter}
              index={index}
            />
          );
        })}
        ;
      </>
    );
  }
}

export default Interface;
