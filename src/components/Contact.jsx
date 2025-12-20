import React from "react";

const Contact = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="glass-card text-center py-5 px-4">

              <span className="section-subtitle text-uppercase">
                Get In Touch
              </span>

              <h2 className="section-heading mt-2 mb-4">
                Let's Work Together
              </h2>

              <p
                className="text-muted mx-auto mb-5"
                style={{ maxWidth: "520px" }}
              >
                I'm currently looking for internships and entry-level
                opportunities in Software Engineering and Data Analytics.
                Have a question or just want to say hi?
              </p>

              {/* Buttons */}
              <div className="d-flex justify-content-center gap-4 flex-wrap">

                {/* Email Me */}
                <a
                  href={
                    isMobile
                      ? "mailto:mehulmore2005@gmail.com?subject=Hello%20Mehul&body=Hi%20Mehul,%0D%0A"
                      : "https://mail.google.com/mail/?view=cm&fs=1&to=mehulmore2005@gmail.com&su=Hello%20Mehul&body=Hi%20Mehul,%0D%0A"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  <i className="bi bi-envelope-fill"></i>
                  <span>Email Me</span>
                </a>

                {/* WhatsApp Me */}
                <a
                  href="https://wa.me/919152551387?text=Hi%20Mehul,%20I%20came%20across%20your%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>WhatsApp Me</span>
                </a>

              </div>

              {/* Social Icons */}
              <div className="d-flex justify-content-center gap-4 mt-5">
                <a href="https://www.linkedin.com/in/mehulm30/" className="text-reset fs-3">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/mehulm30" className="text-reset fs-3">
                  <i className="bi bi-github"></i>
                </a>
                <a href="tel:+919152551387" className="text-reset fs-3">
                  <i className="bi bi-telephone"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;