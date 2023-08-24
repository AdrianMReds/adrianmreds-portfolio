import React, { useEffect } from "react";
import "../styles/Projects.css";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helper/projectList";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects" id="projects">
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
