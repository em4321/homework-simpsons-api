import React from "react";
const Controls = (props) => {
  return (
    <div className="controls">
      <select
        onChange={props.onSortSelect}
        style={{
          backgroundColor: "#efcba4",
          borderRadius: "25px",
          textAlign: "center",
          width: "150px",
          height: "40px",
          color: "white",
          border: "1px solid white",
        }}
      >
        <option value="">Please Select</option>
        <option value="A-Z">Character: A-Z</option>
        <option value="Z-A">Character: Z-A</option>
      </select>
    </div>
  );
};

export default Controls;
