import React from "react";
const button = props => (
  <button disabled={props.disabled} className="button" onClick={props.clicked}>
    +
  </button>
);
export default button;
