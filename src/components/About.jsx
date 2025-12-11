import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-up">
            <div className="glass-card">
              <span className="section-subtitle">Who am I?</span>
              <h2 className="section-heading">Tech Enthusiast &<br/> Problem Solver.</h2>
              <p className="text-muted mt-3">
                I’m an Information Technology undergraduate at <strong>SIES Graduate School of Technology</strong>, Navi Mumbai (2022–2026).
              </p>
              <p className="text-muted">
                I enjoy taking complex problems and turning them into simple, beautiful interface designs. My passion lies in full-stack development, but I have a serious soft spot for <strong>Financial Markets</strong> and <strong>Data Analytics</strong>.
              </p>
              <p className="text-muted mb-4">
                When I'm not coding, I'm analyzing market trends or exploring the latest in Fintech.
              </p>
              <div className="d-flex gap-4">
                <div>
                  <h3 className="fw-bold mb-0 text-info">3+</h3>
                  <small className="text-muted text-uppercase">Years Study</small>
                </div>
                <div>
                  <h3 className="fw-bold mb-0 text-info">10+</h3>
                  <small className="text-muted text-uppercase">Projects</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
            <div className="glass-card">
              <span className="section-subtitle">Highlights</span>
              <ul className="list-unstyled mt-3">
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-info mt-1 me-3"></i>
                  <span>First Prize @ Cognition Tech Fest (Project Presentation)</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-info mt-1 me-3"></i>
                  <span>Intern @ EasyGoLife Web Solutions</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-info mt-1 me-3"></i>
                  <span>Tech Coordinator @ IETE Students' Chapter</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-info mt-1 me-3"></i>
                  <span>Financial Market Analyst Certified (Finlatics)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;