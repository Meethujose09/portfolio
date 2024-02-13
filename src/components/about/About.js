import React from 'react'
import ME from "../../assets/me-about.jpg.png";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import ScrollAnimation from 'react-animate-on-scroll';
import "./about.css";
import "animate.css/animate.min.css";
import Lottie from 'react-lottie';
import * as animationData from '../../lotties/workingLottie.json'
export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
     
           {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div> */}

        <div>
        <Lottie options={defaultOptions}
              height={400}
              width={400}
            
              
              />

        </div>
  
       
        <div>
          <ScrollAnimation animateIn="bounceInRight"
            animateOut="fadeOut"
            duration='800ms'
            delay='0.9s'>
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <BsAwardFill className="about__icon" />
                  <h5>Experience</h5>
                  <small>2+ Years Working</small>
                </article>
                <article className="about__card">
                  <FiUsers className="about__icon" />
                  <h5>Certifications</h5>
                  <small>20+ Certifications</small>
                </article>
                <article className="about__card">
                  <FaProjectDiagram className="about__icon" />
                  <h5>Projects</h5>
                  <small>4+ Completed Projects</small>
                </article>
              </div>
              <h4 style={{marginTop:'50px',marginBottom:'50px'}}>
            
              A recent graduate from Dublin Business School with an MSc in Data Analytics.
              I have 2+ years of experience in a Frontend Developer with a focus on ReactJS, Node.Js, and Java.


              </h4>
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>

          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
