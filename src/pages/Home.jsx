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
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span></span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
