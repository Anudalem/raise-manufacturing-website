import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We provide quality air conditioning services...</h1>
        <p>
          We are raise manufacturing Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iste maxime quisquam, vel quod perferendis id.
          Debitis cum vero soluta non est qui libero eum! Doloremque nobis saepe
          odit? Incidunt, provident?
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
