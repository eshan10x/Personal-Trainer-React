import React from "react";
import "../css/Header.css";
import Navbar from "./Navbar";
import video from "../video/gymmotivation.mp4";

function Header() {
  return (
    <div className="header">
      <div className="header__text">
          
        <video autoPlay loop muted id="video">
          <source src={video} type="video/mp4" />
        </video>
        <Navbar id='mainpagenav'/>
        <h1>
          Fitness <span className="header__colorText">With</span>Naveen
        </h1>
      </div>
      <div className="header__button">
        <button>Join Now</button>
      </div>
    </div>
  );
}

export default Header;
