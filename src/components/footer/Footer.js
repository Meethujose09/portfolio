import React from 'react'
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube
} from "react-icons/io";
import "./footer.css";
export default function Footer() {
  return (
    <div>  <footer>
    <a href="#" className="footer__logo">
      Meethu
    </a>
    <ul className="permalinks">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
     
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="footer__social">
      <a href="https://www.facebook.com/meethujose/" target="_blank">
        <IoLogoFacebook />
      </a>
      <a href="https://www.instagram.com/_meethu_jose" target="_blank">
        <IoLogoInstagram />
      </a>
      <a href="https://twitter.com" target="_blank">
        <IoLogoTwitter />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <IoLogoYoutube />
      </a>
    </div>
    <div className="footer__copyright">
      <small>&copy; All rights reserved</small>
    </div>
  </footer></div>
  )
}
