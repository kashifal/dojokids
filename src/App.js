import {useState} from "react";
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Container from "./Components/Container";
import MobileNav from "./Components/MobileNav";
function App() { 

  return (
    <>
       <Container>
      <Navbar />
      <MobileNav />
      <Banner />
      </Container>
    </>
  );
}

export default App;
