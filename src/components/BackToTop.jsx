import React from 'react';

const BackToTop = () => {
  function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <button id="backToTop" onClick={goTop}><i className="bi bi-arrow-up"></i></button>
  );
};

export default BackToTop;