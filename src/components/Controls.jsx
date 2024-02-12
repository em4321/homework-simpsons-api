import React from "react";
const Controls = (props) => {
  return (
    <div className="controls">
      <select
        onChange={props.onSortSelect}
        style={{
          backgroundColor: "white",
        }}
      >
        <option value="A-Z">Character: A-Z</option>
        <option value="Z-A">Character: Z-A</option>
      </select>
    </div>
  );
};

export default Controls;
