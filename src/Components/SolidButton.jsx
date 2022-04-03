import React from "react";

function SolidButton(props) {
  const style = {
    padding: props.padding,
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    background: props.color,
    color: "white",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    fontSize: "15px"
  };
  return <button  style={style}>{props.btnText}</button>;
}

export default SolidButton;
