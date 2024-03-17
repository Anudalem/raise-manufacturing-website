import React from "react";
import "./Projects.css";
import project_1 from "../../assets/gallery-1.jpg";
import project_2 from "../../assets/gallery-2.jpg";
import project_3 from "../../assets/gallery-3.jpg";
import project_4 from "../../assets/gallery-4.jpg";
import white_arrow from "../../assets/white-arrow.png";
const Projects = () => {
  return (
    <div className="projects">
      <div className="project-gallery">
        <img src={project_1} alt="" />
        <img src={project_2} alt="" />
        <img src={project_3} alt="" />
        <img src={project_4} alt="" />
      </div>
      <button className="btn dark-btn">
        see more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Projects;
