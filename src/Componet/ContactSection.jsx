
import React from "react";
import "./ContactSection.css";
import { FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-wrapper">
      <div className="form-background">
        <div className="contact-box">
          <h4>Contact us now</h4>
          <div className="divider"></div>
          <p className="highlighted-text small">
            Aercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore.
          </p>
          <p className="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="form-box">
          <form className="form-row">
            <div className="form-left">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Enter Your Email" />
              <button type="submit">
                Submit <FaPaperPlane />
              </button>
            </div>
            <div className="form-right">
              <textarea placeholder="Type Your Message"></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
