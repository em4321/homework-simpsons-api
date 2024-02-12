import React, { Component } from "react";
import Characters from "./Characters";
import Input from "./Input";
import "./Characters.modules.css";
import Controls from "./Controls";

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

    filtered.sort((a, b) => {
      if (a.character > b.character) {
        return 1;
      }
      if (b.character > a.character) {
        return -1;
      }
      return 0;
    });

    if (this.state.sortSelect === "Z-A") {
      filtered.reverse();
    }
    return (
      <>
        <Input onTextInput={this.onTextInput} />
        <p>Remaining Characters: {this.props.simpsons.length}</p>
        <p>Liked Characters: {this.props.total}</p>
        <Controls onSortSelect={this.onSortSelect} />
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
