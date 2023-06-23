import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/AdrianMReds" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/adrianmontemayor/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/adrianmreds/" target="_blank">
          <FaInstagram />
        </a>
      </div>
      <p>&copy; 2023 adrianmreds.vercel.app</p>
    </div>
  );
};

export default Footer;
