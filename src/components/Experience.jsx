import React from 'react';

const Experience = () => (
  <section id="experience" className="py-5">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-subtitle">Career Path</span>
        <h2 className="section-heading">Experience</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="timeline">
            <div className="timeline-item" data-aos="fade-left">
              <span className="timeline-dot"></span>
              <span className="timeline-date">FEB 2025 – APR 2025</span>
              <h4 className="mb-1">Website Developer Intern</h4>
              <p className="text-info mb-2">EasyGoLife Web Solutions · Remote</p>
              <p className="text-muted">
                Converted Figma designs into responsive HTML/CSS/JS. Implemented smooth scrolling, UI interactions, and connected frontend forms to backend endpoints.
              </p>
            </div>

            <div className="timeline-item" data-aos="fade-left" data-aos-delay="200">
              <span className="timeline-dot"></span>
              <span className="timeline-date">FEB 2024 – FEB 2025</span>
              <h4 className="mb-1">Technical Coordinator</h4>
              <p className="text-info mb-2">IETE Students' Chapter · SIES GST</p>
              <p className="text-muted">
                Led technical setups for workshops and events. Facilitated peer learning and coordinated between technical teams for smooth event execution.
              </p>
            </div>

            <div className="timeline-item" data-aos="fade-left" data-aos-delay="100">
              <span className="timeline-dot"></span>
              <span className="timeline-date">AUG 2024 – DEC 2025</span>
              <h4 className="mb-1">Internship Trainee</h4>
              <p className="text-info mb-2">CodSoft · Remote</p>
              <p className="text-muted">
                Completed various web development tasks involving HTML, CSS, and JS logic. Collaborated with a remote team to deliver module-based projects.
              </p>
            </div>

            <div className="timeline-item" data-aos="fade-left" data-aos-delay="200">
              <span className="timeline-dot"></span>
              <span className="timeline-date">FEB 2023 – MAR 2023</span>
              <h4 className="mb-1">FIFA Event Head</h4>
              <p className="text-info mb-2">SIES GST Students' Council · SIES GST</p>
              <p className="text-muted">
                Managed the FIFA event end-to-end, overseeing registrations, technical arrangements, and participant engagement to ensure a seamless experience.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;