import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();
const sendEmail =(e)=>{
  e.preventDefault();

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this.form.current,
      "YOUR_USER_ID"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
  return (
    <div>  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <div className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>meethujose09@gmail.com</h5>
          <a href="mailto:meethujose09@gmail.com">Send a message</a>
        </div>
        <div className="contact__option">
          <RiMessengerLine className="contact__option-icon" />
          <h4>Messenger</h4>
          <h5>Meethu Jose</h5>
          <a href="https://m.me">Send a message</a>
        </div>
        <div className="contact__option">
          <RiWhatsappLine className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>+353 94824975</h5>
          <a href="https://api.whatsapp.com/send?phone=0894824975">
            Send a message
          </a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} action="">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  </section></div>
  )
}
