import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>ADDRESS</p>
              <p>INDIA</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              123456789
            </h4>
          </div>
          <br></br>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              manav@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <div>
            <h4>About Me</h4>
            <p>Hello Im Manav Kumar And This is my Website in REACT !!</p>
            <br></br>
          </div>
          <div className="social">
            <FaGithub
              size={40}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            ˜˜
            <FaTwitter
              size={40}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
