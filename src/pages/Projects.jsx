import React from "react";
import "../styles/Projects.css";
import ProjectItem from "../components/ProjectItem";
import Colorpalettepic from "../assets/colorpalette.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal projects</h1>
      <div className="projectList">
        <ProjectItem name="Color palette generator" image={Colorpalettepic} />
        <ProjectItem name="Color palette generator" image={Colorpalettepic} />
      </div>
    </div>
  );
};

export default Projects;
