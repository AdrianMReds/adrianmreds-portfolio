import React from "react";
import "../styles/Projects.css";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helper/projectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal projects</h1>
      <div className="projectList">
        {ProjectList.map((item, index) => {
          return (
            <ProjectItem
              id={index}
              name={item.name}
              image={item.image}
              skills={item.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
