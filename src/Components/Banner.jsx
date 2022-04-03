import React from "react";
import SolidButton from "./SolidButton";
import MiniCard from "./MiniCard";
import Illustration from "./illustration.png";
function Banner() {
  const style = {
    color: "#4FD344",
  };
  return (
    <div className="banner">
      <div className="text">
        <h1>
          Join <span style={style}>Dojo</span>Kids for better 
          <span style={style}> future</span> of your children
        </h1>
        <p>
          DojoKids studio is an online platform for children
          to learn coding and explore new technologies.
        </p>
        <div className="bannerBtns">
          <SolidButton btnText="Linkedin" color="#000" padding="10px 35px" />
          <SolidButton btnText="Twitter" color="#4fd344" padding="10px 35px" />
        </div>
        <div className="mini-cards">
          <MiniCard icon="groups" mainText="Our Team" />
          <MiniCard icon="insights" mainText="Our Work" />
          <MiniCard icon="school" mainText="10,00 + students" />
        </div>
      </div>
      <div className="illus">
        <img src={Illustration} alt="Illustration" />
      </div>
    </div>
  );
}

export default Banner;
