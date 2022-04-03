import React from "react";

function Container(props) {
  const style = {
    maxWidth: "90%",
    margin: "auto",
  };
  return <div style={style}>{props.children}</div>;
}

export default Container;
