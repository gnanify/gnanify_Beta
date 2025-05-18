import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../styles/Footer.css";
import webicon from "../assets/images/webiconmain.png"; // Make sure the path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ✅ Logo Section - Left Side */}
        <div className="footer-logo-section">
          <img src={webicon} alt="Gnanify Logo" className="footer-icon" />
          <p className="company-name">Gnanify EdTech Pvt Ltd</p>
        </div>

        {/* 📍 Address Section */}
        <div className="footer-section address">
          <h3>📍 Let's Connect!</h3>
          <p>🌟 Madhapur, Tirupati, Andhra Pradesh - 517501, India</p>
          <p><FaEnvelope /> <a href="mailto:support@gnanify.com">support@gnanify.com</a></p>
          <p><FaPhone /> <a href="tel:+919876543210">+91 98765 43210</a></p>
        </div>

        {/* 🔗 Quick Links */}
        <div className="footer-section links">
          <h3>🔗 Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* 🌍 Social Media */}
        <div className="footer-section social">
          <h3>🌍 Follow the Magic</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Gnanify. All rights reserved. | <a href="/privacy">Privacy Policy</a> | ✨ Powered by Dreams & Code</p>
      </div>
    </footer>
  );
};

export default Footer;
