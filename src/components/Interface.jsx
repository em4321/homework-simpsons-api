import React, { Component } from "react";
import Characters from "./Characters";
import Input from "./Input";

class Interface extends Component {
  state = { textInput: " " };
  onTextInput = (e) => {
    this.setState({ textInput: e.target.value });
  };
  render() {
    console.log(this.state);
    let filtered = [...this.props.simpsons];
    filtered = filtered.filter((item) => {
      return item.character
        .toLowerCase()
        .includes(this.state.textInput.toLowerCase());
    });

    return (
      <>
        <Input onTextInput={this.onTextInput} />
        <p>Total Characters: {this.props.simpsons.length}</p>
        <p>Total Liked: {this.props.total}</p>
        {filtered.map((item, index) => {
          //Create children
          return (
            <Characters
              key={index}
              {...item}
              onDeleteCharacter={this.props.onDeleteCharacter}
              onLikeCharacter={this.props.onLikeCharacter}
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
