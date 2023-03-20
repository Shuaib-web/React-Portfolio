import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header"
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
     
      <Nav />
      <Header/>
      <AboutMe />
      <Project />
      <Footer /> 
    </div>
  );
}
