import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { skills } from "../helper/skills";
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
        <div className="skill-type">
          <h2>Front-End</h2>
          <div className="skill-list">
            {skills.frontend.map((item) => {
              return (
                <div className="skill">
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skill-type">
          <h2>Back-End</h2>
          <div className="skill-list">
            {skills.backend.map((item) => {
              return (
                <div className="skill">
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skill-type">
          <h2>Languages</h2>
          <div className="skill-list">
            {skills.languages.map((item) => {
              return (
                <div className="skill">
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skill-type">
          <h2>Other skills</h2>
          <div className="skill-list">
            {skills.others.map((item) => {
              return (
                <div className="skill">
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
