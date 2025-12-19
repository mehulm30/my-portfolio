import React from 'react';

const Contact = () => (
  <section id="contact" className="py-5">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8" data-aos="zoom-in">
          <div className="glass-card text-center py-5">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-heading mb-4">Let's Work Together</h2>
            <p className="text-muted mb-5 mx-auto" style={{ maxWidth: 500 }}>
              I'm currently looking for internships and entry-level opportunities in Software Engineering and Data Analytics. Have a question or just want to say hi?
            </p>
            <a href="mailto:mehulmore2005@gmail.com" className="btn btn-glow btn-lg mb-4">
              <i className="bi bi-envelope-fill me-2"></i> Say Hello
            </a>
            <div className="d-flex justify-content-center gap-4 mt-3">
              <a href="https://www.linkedin.com/in/mehulm30/" className="text-reset fs-3 transition-hover"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/mehulm30" className="text-reset fs-3 transition-hover"><i className="bi bi-github"></i></a>
              <a href="tel:+919152551387" className="text-reset fs-3 transition-hover"><i className="bi bi-telephone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;