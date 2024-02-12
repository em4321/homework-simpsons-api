import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="search">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search Simpsons character..."
          onInput={this.props.onTextInput}
          style={{
            borderRadius: "25px",
            textAlign: "center",
            width: "350px",
            height: "40px",
            backgroundColor: "white",
          }}
        ></input>
      </div>
    );
  }
}

export default Input;
