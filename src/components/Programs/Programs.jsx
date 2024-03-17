import React from "react";
import "./Programs.css";
import program_1 from "../../assets/services-1.jpg";
import program_2 from "../../assets/services-2.jpg";
import program_3 from "../../assets/services-3.jpg";
import program_icon_1 from "../../assets/installation-icon.png";
import program_icon_2 from "../../assets/maintenance-icon.png";
import program_icon_3 from "../../assets/mechanichal-icon.png";
const programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>HAVC Instalation</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>HAVC Maintenance</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p className="electro">Electro Mechanical services</p>
        </div>
      </div>
    </div>
  );
};

export default programs;
