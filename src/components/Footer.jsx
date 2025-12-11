import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    // in case user keeps the page open across years
    const id = setInterval(() => setYear(new Date().getFullYear()), 1000 * 60 * 60);
    return () => clearInterval(id);
  }, []);
  return (
    <footer>
      <div className="container">
        <p className="mb-1">&copy; {year} Mehul More. All rights reserved.</p>
        <small className="text-muted">Built with precision & coffee.</small>
      </div>
    </footer>
  );
};

export default Footer;