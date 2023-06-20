import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaGithub />
        <FaLinkedin />
        <FaInstagram />
      </div>
      <p>&copy; 2023 @adrianmreds</p>
    </div>
  );
};

export default Footer;
