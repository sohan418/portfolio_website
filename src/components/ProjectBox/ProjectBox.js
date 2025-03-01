import React from "react";

const ProjectBox = ({ image, title, viewLink, githubLink }) => (
  <div className="project-box-container">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <div className="button-container">
      <button className="btn-3">
        <a href={viewLink}>View</a>
      </button>
      <button className="btn-4">
        <a href={githubLink}>GitHub</a>
      </button>
    </div>
  </div>
);

 
export default ProjectBox ;
