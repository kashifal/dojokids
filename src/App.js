import {useState} from "react";
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Container from "./Components/Container";
import MobileNav from "./Components/MobileNav";
import Teaching from "./Components/Teaching";
function App() { 

  return (
  
       <Container>
      <Navbar />
      <MobileNav />
        <Banner />
        <Teaching />
      </Container>
  
  );
}

export default App;
