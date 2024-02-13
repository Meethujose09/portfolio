import React from 'react'
import PIC from "../../assets/Meethu2.jpeg";

import "./header.css";
import CV from "./CV";

import SocialPlatforms from "./SocialPlatforms";
export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h3>  HI There! 👋
          </h3>
          <h1> I'M MEETHU JOSE</h1>
         

        <h4 className="text-light">MERN Stack Developer!</h4>
        <CV />
        <SocialPlatforms />

        <div className="me">
          <img src={PIC} alt="me" style={{ borderRadius: '50%', width: '250px', height: '250px', marginTop: '3rem' }} />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}
