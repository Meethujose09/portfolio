import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
export default function SocialPlatforms() {
  return (
    <div className="header__socials">
    <a href="https://www.linkedin.com/in/meethu-jose" target="_blank">
      <BsLinkedin style={{height:'20px',width:'20px'}}/>
    </a>
    <a href="https://github.com/meethujose" target="_blank" >
      <FaGithub style={{height:'20px',width:'20px'}}/>
    </a>
    
  </div>
  )
}
