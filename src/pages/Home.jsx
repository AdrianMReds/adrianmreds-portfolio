import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Adrian</h2>
        <div className="prompt">
          <p>A software developer that loves to create stuff.</p>
          <a href="https://github.com/AdrianMReds" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adrianmontemayor/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/adrianmreds/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, Javascript, ReactJS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Firebase, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, Python, C++, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
