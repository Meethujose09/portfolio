import React from "react";
import './style.css';

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Animation from './components/tsparticles/particles'
export default function App() {
  return (
    <>
      <Animation />
      <div className="about_div">
        <Header />
        <Nav />
      </div>
      <About />


      <Experience />
      {/* <Services /> */}


      <Contact />
      <Footer />

    </>
  );
}
