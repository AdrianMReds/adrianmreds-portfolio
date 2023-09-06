import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#1a1365">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="AUG 2018 - DEC 2022"
          iconStyle={{ background: "#1a1365", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Tecnológico de Monterrey
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - Present"
          iconStyle={{ background: "#2f38c5", color: "#fff" }}
          icon={<FaChalkboardTeacher />}
        >
          <h3 className="vertical-timeline-element-title">
            Founder - Codekraft
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Monterrey, Nuevo León
          </h4>
          <p>
            Founded a technology academy for kids and teenagers, I've been a
            teacher, manager and course developer
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2023 - July 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer - Dropin
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Have worked with ReactJS, Javascript, Typescript, Python, Firebase
            and different APIs for 3 projects.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Web developer - Powertrain Ventures
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Monterrey, Nuevo León
          </h4>
          <p>
            I develop MVPs for startups using Wordpress, Elementor and
            Formidable. I create plugins for Wordpress using Javascript and
            modify Formidable tables with HTML and CSS.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
