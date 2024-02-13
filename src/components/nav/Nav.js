import React,{useState} from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";
export default function Nav() {
const [button, setButton] = useState();
  return (
    <nav>
    <a
      onClick={() =>setButton({ active: "#" })}
      className={button === "#" ? "active" : ""}
      href="#"
    >
      <AiOutlineHome />
    </a>
    <a
      onClick={() => setButton({ active: "#about" })}
      className={button === "#about" ? "active" : ""}
      href="#about"
    >
      <AiOutlineUser />
    </a>
    <a
      onClick={() => setButton({ active: "#experience" })}
      className={button === "#experience" ? "active" : ""}
      href="#experience"
    >
      <BiBook />
    </a>
    <a
      onClick={() => this.setState({ active: "#services" })}
      className={button === "#services" ? "active" : ""}
      href="#services"
    >
      <RiServiceLine />
    </a>
    <a
      onClick={() => this.setState({ active: "#contact" })}
      className={button === "#contact" ? "active" : ""}
      href="#contact"
    >
      <BiMessageSquareDetail />
    </a>
  </nav>
  )
}
