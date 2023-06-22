import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/projectList";
import { FaGithub } from "react-icons/fa";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>Skills: {project.skills}</p>
      <FaGithub />
    </div>
  );
};

export default ProjectDisplay;