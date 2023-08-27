import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";
import "../styles/Experience.css";
import { educationList, experienceList } from "../helper/experienceList";
import ExperienceItem from "../components/ExperienceItem";

const Experience = () => {
  console.log(educationList);

  return (
    <div className="container">
      <h1>My experience</h1>
      <div className="experience">
        <h3>Work</h3>
        <div className="work">
          {experienceList.map((item) => {
            return <ExperienceItem item={item} />;
          })}
        </div>
        <h3>Education</h3>
        <div className="education">
          {educationList.map((item) => {
            return <ExperienceItem item={item} edu />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
