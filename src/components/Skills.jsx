import React from 'react';

const Skills = () => (
  <section id="skills" className="py-5">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-subtitle">My Arsenal</span>
        <h2 className="section-heading">Technologies & Tools</h2>
      </div>

      <div className="row g-4">
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <div className="glass-card h-100 text-center">
            <div className="mb-3">
              <i className="bi bi-code-slash fs-1 text-primary"></i>
            </div>
            <h4 className="mb-3">Languages</h4>
            <div>
              <span className="tech-pill">Java</span>
              <span className="tech-pill">Python</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">HTML5</span>
              <span className="tech-pill">CSS3</span>
              <span className="tech-pill">C</span>
              <span className="tech-pill">C++</span>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-card h-100 text-center">
            <div className="mb-3">
              <i className="bi bi-layers fs-1 text-primary"></i>
            </div>
            <h4 className="mb-3">Frameworks</h4>
            <div>
              <span className="tech-pill">React.js</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Bootstrap</span>
              <span className="tech-pill">Flask</span>
              <span className="tech-pill">FastAPI</span>
              <span className="tech-pill">OpenCV</span>
              <span className="tech-pill">AWT</span>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
          <div className="glass-card h-100 text-center">
            <div className="mb-3">
              <i className="bi bi-tools fs-1 text-primary"></i>
            </div>
            <h4 className="mb-3">Tools & Cloud</h4>
            <div>
              <span className="tech-pill">Git</span>
              <span className="tech-pill">GitHub</span>
              <span className="tech-pill">MongoDB</span>
              <span className="tech-pill">MySQL</span>
              <span className="tech-pill">SQLite</span>
              <span className="tech-pill">AWS Basics</span>
              <span className="tech-pill">Figma</span>
              <span className="tech-pill">Netlify</span>
              <span className="tech-pill">VS Code</span>
              <span className="tech-pill">Microsoft Office</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Skills;