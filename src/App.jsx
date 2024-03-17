import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VedioPlayer from "./components/VideoPlayer/VedioPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          subTitle="Our Services"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt quis suscipit harum iste, vero aperiam, quaerat quos veritatis tenetur consectetur placeat sequi dolor? Suscipit alias ex harum impedit temporibus."
        />

        <Programs />

        <About setPlayState={setPlayState} />
        <Title
          subTitle="Our Project"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt quis suscipit harum iste, vero aperiam, quaerat quos veritatis tenetur consectetur placeat sequi dolor? Suscipit alias ex harum impedit temporibus."
        />
        <Projects />
        <Title subTitle="TESTIMONIALS" title="What our client says" />
        <Testimonials />
        <Title subTitle="Contact us" title="Get in touch " />
        <Contact />
        <Footer />
      </div>
      <VedioPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
