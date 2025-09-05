import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaLock,
  FaSlidersH,
  FaCogs
} from "react-icons/fa";

import { IoMdArrowDropright } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        {/* Column 1: Logo & Info */}
        <div className="footer-col">
          <img src="./Image/logo.png" alt="Logo" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            consectetur adipisicing elit,
          </p>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt /> Mirpur, dhaka-bangladesh
            </li>
            <li>
              <FaEnvelope /> info@clippinglamp.com
            </li>
            <li>
              <FaPhoneAlt /> call: 900-200-2315
            </li>
          </ul>
        </div>

        {/* Column 2: Site Map */}
        <div className="footer-col quick-links">
          <h5>
            <FaSlidersH className="icon"/>
            | SETRA SITE MAP
          </h5>
          <ul>
            <li>
              <IoMdArrowDropright />
              Home
            </li>
            <li>
              <IoMdArrowDropright />
              Our Shop
            </li>
            <li>
              <IoMdArrowDropright />
              About Us
            </li>
            <li>
              <IoMdArrowDropright />
              Blog
            </li>
            <li>
              <IoMdArrowDropright />
              Your Account
            </li>
            <li>
              <IoMdArrowDropright />
              Our Guarantee
            </li>
          </ul>
        </div>

        {/* Column 3: Our Company */}
        <div className="footer-col quick-links">
          <h5><FaCogs className="icon"/>| OUR COMPANY</h5>
          <ul>
            <li>
              <IoMdArrowDropright />
              Shipping Policy
            </li>
            <li>
              <IoMdArrowDropright />
              International Shipping
            </li>
            <li>
              <IoMdArrowDropright />
              Affiliates
            </li>
            <li>
              <IoMdArrowDropright />
              Our Sponsors
            </li>
            <li>
              <IoMdArrowDropright />
              Team & Conditions
            </li>
            <li>
              <IoMdArrowDropright />
              Cash On Delivery
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-col">
          <h4>NEWSLETTER SUBSCRIPTION</h4>
          <p>subscribe to our newsletter to get allour news in your inbox</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button >Subscribe Us</button>
          </div>
          <p className="privacy">
            <FaLock /> Your email address is 100% safe to us
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bottom">
        <p>
          Designed and Developed by <a href="#">WpthemesGrid</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
