import React from "react";
const style = {
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "#50d34463 0px 0px 0px 3px",
  cursor: "pointer",
};
function MiniCard(props) {
  return (
    <div className="grid" style={style}>
      <div className="icon-text">
        <span class="material-icons">{props.icon}</span>
        <span className="main-text">{props.mainText}</span>
      </div>
    </div>
  );
}

export default MiniCard;
