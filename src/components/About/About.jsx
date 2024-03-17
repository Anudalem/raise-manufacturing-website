import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";
import Raise_cp from "../../assets/Raise CP non-editable.pdf";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h2>About raise manufacturing</h2>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi
          eveniet aut, aperiam cum blanditiis quae totam nesciunt rerum deleniti
          expedita eos necessitatibus dolorum error, recusandae ducimus fuga
          aliquam a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nemo vel expedita nesciunt totam minima aliquid id pariatur labore eum
          suscipit, in velit eius sunt natus culpa optio maiores placeat iusto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          natus asperiores? Repellat nemo consectetur eum sed nesciunt
          asperiores sequi, facere quasi deleniti assumenda inventore non, at
          sunt odio natus voluptate. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo vel expedita nesciunt totam minima aliquid id
          pariatur labore eum suscipit, for more see our
          <a href={Raise_cp}> company profile</a>
        </p>
      </div>
    </div>
  );
};

export default About;
