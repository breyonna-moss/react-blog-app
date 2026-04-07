import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";
// <h1 className="contact-header">Contact Us</h1>
//      <ThemeSwitcher></ThemeSwitcher>


function ContactPage() {
  return (
    <>
      <Header/>
      <div className="contact-page">
        <form className="contact-form">
        <h1 className="contact-header">Contact Us</h1>
          <input type="text" name="name" placeholder="Your Name" required className="name-form"/>
          <input type="email" name="email" placeholder="Your Email" required className="email-form"/>
          <textarea name="message" placeholder="Your Message" required className="message-form"/>
          <button type="submit" className="contact_submit_btn">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;