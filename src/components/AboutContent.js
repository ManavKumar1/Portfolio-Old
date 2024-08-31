import "./AboutContent.css";
import {Link} from "react-router-dom"
import React from "react";
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.webp"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I ? </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          commodi harum. Libero facere nulla, quod perferendis quo esse ut
          labore.
        </p>
        <Link to="../Contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
