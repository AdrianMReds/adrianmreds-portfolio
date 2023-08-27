import React from "react";

const ExperienceItem = ({ item, edu }) => {
  return (
    <div className="experienceItem">
      <div className="date">{item.date}</div>
      <div className="content">
        <div className="text">
          <p id="where">{item.where}</p>
          {edu ? <p id="type">{item.type}</p> : <p id="role">{item.role}</p>}
          <p>{item.description}</p>
        </div>
        <div className="tags">
          {item.tags.map((tag) => {
            return <p className="tag">{tag}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
