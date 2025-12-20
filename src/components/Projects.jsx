import React from 'react';

const Projects = () => (
  <section id="projects" className="py-5">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-subtitle">Portfolio</span>
        <h2 className="section-heading">Featured Projects</h2>
        <h7>( Click the GitHub icon to view the project )</h7>
      </div>

      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-lg-6" data-aos="fade-up">
          <div className="glass-card d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h3 className="h4 fw-bold">BizNiche</h3>
              <a href="https://github.com/mehulm30/BizNiche" target="_blank" rel="noreferrer" className="text-reset">
                <i className="bi bi-github fs-4"></i>
              </a>
            </div>
            <p className="text-muted mb-4 flex-grow-1">
              A marketplace platform connecting startups with verified sellers for essential business assets. Features user auth, product listings, and a responsive UI.
            </p>
            <div className="mb-3">
              <span className="tech-pill">PHP</span>
              <span className="tech-pill">MySQL</span>
              <span className="tech-pill">Bootstrap</span>
            </div>
            <div className="mt-2 text-info small fw-bold">
              <i className="bi bi-trophy-fill me-1"></i> 1st Prize Winner - Cognition Tech Fest
            </div>
          </div>
        </div>

        {/* Repeat other project blocks (omitted here for brevity) */}
        {/* Project 2 */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="glass-card d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h3 className="h4 fw-bold">Number Plate Scanner</h3>
              <a href="https://github.com/mehulm30/Car-Number-Plate-Scanner" target="_blank" rel="noreferrer" className="text-reset">
                <i className="bi bi-github fs-4"></i>
              </a>
            </div>
            <p className="text-muted mb-4 flex-grow-1">
              A Computer Vision system using OpenCV and Tesseract OCR to automatically detect and extract text from vehicle license plates with high accuracy.
            </p>
            <div className="mb-3">
              <span className="tech-pill">Python</span>
              <span className="tech-pill">OpenCV</span>
              <span className="tech-pill">OCR</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-card d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h3 className="h4 fw-bold">Traffic Flow Prediction</h3>
              <a href="https://github.com/mehulm30/TrafficPrediction-semIV" target="_blank" rel="noreferrer" className="text-reset">
                <i className="bi bi-github fs-4"></i>
              </a>
            </div>
            <p className="text-muted mb-4 flex-grow-1">
              A machine learning-based project that predicts traffic patterns and congestion trends using historical data, helping analyse peak hours and flow behaviour.
            </p>
            <div className="mb-3">
              <span className="tech-pill">Python</span>
              <span className="tech-pill">Machine Learning</span>
              <span className="tech-pill">Data Analysis</span>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <div className="glass-card d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h3 className="h4 fw-bold">ClothAid v2</h3>
              <a href="https://github.com/mehulm30/Clothaidv2" target="_blank" rel="noreferrer" className="text-reset">
                <i className="bi bi-github fs-4"></i>
              </a>
            </div>
            <p className="text-muted mb-4 flex-grow-1">
              A web-based clothing platform that showcases products with a clean, responsive UI, focusing on user-friendly browsing and structured category layouts.
            </p>
            <div className="mb-3">
              <span className="tech-pill">HTML</span>
              <span className="tech-pill">CSS</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">Responsive UI</span>
            </div>
          </div>
        </div>

        {/* Project 5 & 6 omitted for brevity: add similarly */}
      </div>

      <div className="text-center mt-5">
        <a href="https://github.com/mehulm30?tab=repositories" target="_blank" rel="noreferrer" className="btn btn-outline-glow">
          View More on GitHub <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
);

export default Projects;