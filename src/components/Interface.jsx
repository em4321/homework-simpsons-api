import React, { Component } from "react";
import Characters from "./Characters";
import Input from "./Input";
import "./Characters.modules.css";
import Controls from "./Controls";
import { FaRegThumbsUp } from "react-icons/fa";
import Joi from "joi";

class Interface extends Component {
  state = { textInput: " ", sortSelect: " " };

  schema = {
    textInput: Joi.string().min(3).max(10),
    sortSelect: Joi.required(),
  };
  onTextInput = async (e) => {
    // const textInput = { ...this.state.textInput };
    // textInput = e.target.value;

    this.setState({ textInput: e.target.value });
    const _joiInput = Joi.object(this.schema);
    try {
      await _joiInput.validateAsync(this.state);
    } catch (e) {
      console.log(e);

      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });
      this.setState({ errors: errorsMod });
    }
  };

  onSortSelect = async (e) => {
    this.setState({ sortSelect: e.target.value });
    const _joiSelect = Joi.object(this.schema);
    try {
      await _joiSelect.validateAsync(this.state);
    } catch (e) {
      console.log(e);

      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });
      this.setState({ errors: errorsMod });
    }
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
        <p>{this.state.errors && this.state.errors.textInput}</p>
        <p>
          <FaRegThumbsUp
            style={{
              color: "#f66e85",
              margin: "5px",
            }}
          />
          {this.props.total} out of {this.props.simpsons.length} Characters
        </p>
        <Controls onSortSelect={this.onSortSelect} />
        <p>{this.state.errors && this.state.errors.sortSelect}</p>
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
