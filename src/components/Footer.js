import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Optional: Use if you're using React Router
import "../styles/Footer.css";
import webicon from "../assets/images/webiconmain.png";
const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer-container">

                {/* Logo Section */}
                <div className="footer-section logo-section">
                    <img
                        src={webicon}
                        alt="Gnanify company logo"
                        className="footer-icon"
                    />
                </div>

                {/* Address Section */}
                <div className="footer-section address">
                    <h3>📍 Let's Connect!</h3>
                    <p><strong>Gnanify EdTech Pvt Ltd</strong></p>
                    <p>🌟 Madhapur, Tirupati, Andhra Pradesh - 517501, India</p>
                    <p>
                        <FaEnvelope />{" "}
                        <a href="mailto:support@gnanify.com" aria-label="Email support">support@gnanify.com</a>
                    </p>
                    <p>
                        <FaPhone />{" "}
                        <a href="tel:+919876543210" aria-label="Call support">+91 98765 43210</a>
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h3>🔗 Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section social">
                    <h3>🌍 Follow the Magic</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2024 Gnanify. All rights reserved. | <Link to="/privacy">Privacy Policy</Link> | ✨ Powered by Dreams & Code
                </p>
            </div>
        </footer>
    );
};

export default Footer;
