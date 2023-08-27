import React from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../helper/skillIcons";

const ProjectItem = ({ id, image, name, skills }) => {
  const navigate = useNavigate();
  const skillList = skills.split(", ");

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <div className="skillIcons">
        {skillList.map((skill) => {
          return icons[skill];
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
