import React from "react"
import "./HeroImg.css"
import introImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom'


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="intro-img" />
      </div>
      <div className="content">
        <p> HI, I'M A WEB-DEVELOPER</p>
        <h1>REACT DEVELOPER</h1>
        <div>
          <Link to="/Project" className="btn">Projects</Link>
          <Link to="/Project" className="btn btn-light">Contact</Link> 
        </div>
      </div>
    </div>
  );
}

export default HeroImg