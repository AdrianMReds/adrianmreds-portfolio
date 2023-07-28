import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helper/projectList";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <button
        className="back-btn"
        onClick={() => {
          navigate("/projects");
        }}
      >
        <FaArrowLeft />
      </button>
      <h1>{project.name}</h1>
      <img src={project.image} alt="Project" />
      <p>Skills: {project.skills}</p>
      {project.repo && (
        <a href={project.repo} target="_blank">
          <FaGithub />
        </a>
      )}
      <button
        className="back-txt-btn"
        onClick={() => {
          navigate("/projects");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default ProjectDisplay;
