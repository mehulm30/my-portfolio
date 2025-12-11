import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start" data-aos="fade-right">
            <div className="hero-badge">
              <span className="dot"></span> Available for Web Dev, Data Roles, Finance Roles
            </div>
            <span className="section-subtitle2">Hi, I'm</span>
            <h1 className="hero-title">Mehul More</h1>
            <p className="hero-subtitle mb-4">
              An IT undergraduate crafting modern web applications, software solutions, and data-driven insights. Bridging the gap between Code and Finance.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-glow">View Projects</a>
              <a href="https://drive.google.com/file/d/1yHsFdLZ4W1XZdDsomb2QKQ4Nz17OmLdw/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-outline-glow" download>
                Download CV <i className="bi bi-download ms-2"></i>
              </a>
            </div>
            <div className="mt-4 pt-2 d-flex gap-4 justify-content-center justify-content-lg-start text-muted">
              <a href="https://github.com/mehulm30" target="_blank" rel="noreferrer" className="fs-4 text-reset transition-hover"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/mehulm30/" target="_blank" rel="noreferrer" className="fs-4 text-reset transition-hover"><i className="bi bi-linkedin"></i></a>
              <a href="mailto:mehulmore2005@gmail.com" className="fs-4 text-reset transition-hover"><i className="bi bi-envelope"></i></a>
            </div>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0 hero-visual-wrapper" data-aos="zoom-in" data-aos-delay="200">
            <div className="rocket-scene">
              <div className="moon">
                <div className="crater crater-1"></div>
                <div className="crater crater-2"></div>
                <div className="crater crater-3"></div>
                <div className="crater crater-4"></div>
                <div className="crater crater-5"></div>
                <div className="shadow"></div>
                <div className="eye eye-l"></div>
                <div className="eye eye-r"></div>
                <div className="mouth"></div>
                <div className="blush blush-1"></div>
                <div className="blush blush-2"></div>
              </div>
              <div className="orbit">
                <div className="rocket">
                  <div className="window"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;