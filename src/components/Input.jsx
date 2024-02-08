import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Type a character..."
          onInput={this.props.onTextInput}
        ></input>
      </div>
    );
  }
}

export default Input;
