import React from "react";
import logo from "./logo.png";
import SolidButton from "./SolidButton";
function Navbar() {
  return (
    <div className="nav">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">Classes</a>
        <a href="/">Testimonials</a>
        <a href="/">Systems</a>
      </div>
      <div className="btns">
        <SolidButton btnText="Comming!" color="#000" padding="10px 25px" />
      </div>
    </div>
  );
}

export default Navbar;
