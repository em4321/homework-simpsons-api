import React, { Component } from "react";
import Characters from "./Characters";
import Input from "./Input";
import "./Characters.modules.css";

class Interface extends Component {
  state = { textInput: " ", sortSelect: " " };
  onTextInput = (e) => {
    this.setState({ textInput: e.target.value });
  };
  onSortSelect = (e) => {
    this.setState({ sortSelect: e.target.value });
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
        <p>Remaining Characters: {this.props.simpsons.length}</p>
        <p>Liked Characters: {this.props.total}</p>
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
