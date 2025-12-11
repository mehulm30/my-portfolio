import React, { useEffect, useRef } from 'react';

const Navbar = ({ theme, setTheme }) => {
  const navRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const links = nav.querySelectorAll('.nav-link');
    const underline = underlineRef.current;

    function moveUnderline(el) {
      const { offsetLeft, offsetWidth } = el;
      underline.style.width = `${offsetWidth}px`;
      underline.style.transform = `translateX(${offsetLeft}px)`;
    }

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        if (window.innerWidth > 991) moveUnderline(link);
        else underline.style.width = '0';
      });
    });

    window.addEventListener('resize', () => {
      const active = nav.querySelector('.nav-link.active');
      if (window.innerWidth <= 991) {
        underline.style.width = '0';
      } else if (active) {
        moveUnderline(active);
      }
    });

    // init underline for default active link
    const active = nav.querySelector('.nav-link.active');
    if (active && window.innerWidth > 991) moveUnderline(active);

    return () => {
      // cleanup listeners to avoid leaks
      links.forEach(link => link.replaceWith(link.cloneNode(true)));
      window.removeEventListener('resize', () => {});
    };
  }, []);

  // Navbar scroll behavior (scrolled class + hide on scroll)
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    function onScroll() {
      const currentY = window.scrollY;
      if (currentY > 300) {
        document.getElementById('backToTop')?.classList.add('active');
        navbar.classList.add('scrolled');
      } else {
        document.getElementById('backToTop')?.classList.remove('active');
        navbar.classList.remove('scrolled');
      }

      if (window.innerWidth > 991) {
        if (currentY > lastScrollY && currentY > 120) {
          navbar.classList.add('nav-hide');
        } else {
          navbar.classList.remove('nav-hide');
        }
      } else {
        navbar.classList.remove('nav-hide');
      }

      lastScrollY = currentY;
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <nav id="mainNav" className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">MEHUL MORE</a>
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="bi bi-list fs-2" style={{ color: 'var(--text-main)' }}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul ref={navRef} className="navbar-nav align-items-center">
            <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
                <i className={theme === 'light' ? 'bi bi-sun-fill' : 'bi bi-moon-stars'}></i>
                <span id="themeLabel">{theme === 'light' ? 'Light' : 'Dark'}</span>
              </button>
            </li>
            <span ref={underlineRef} className="nav-underline" style={{ position: 'absolute' }} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;