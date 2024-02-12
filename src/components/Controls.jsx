import React, { Component } from "react";

class Controls extends Component {
  state = {};
  render() {
    return (
      <div className="controls">
        <select
          onSelect={this.props.onSortSelect}
          style={{
            backgroundColor: "white",
          }}
        >
          <option value="A-Z">Character: A-Z</option>
          <option value="Z-A">Character: Z-A</option>
        </select>
      </div>
    );
  }
}

export default Controls;
