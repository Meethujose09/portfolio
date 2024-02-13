import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
export default function SocialPlatforms() {
  return (
    <div className="header__socials">
    <a href="https://www.linkedin.com/in/meethu-jose" target="_blank">
      <BsLinkedin />
    </a>
    <a href="https://github.com/meethujose" target="_blank">
      <FaGithub />
    </a>
    <a href="https://dribbble.com" target="_blank">
      <FiDribbble />
    </a>
  </div>
  )
}
