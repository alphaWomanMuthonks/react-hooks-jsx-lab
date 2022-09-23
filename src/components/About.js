import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="About">
    <h2> About Me </h2>
    <p> Growth is essential </p>
    <img src ={image} alt='I made this'/>
  
  </div>
  );
}

export default About;
