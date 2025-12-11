import React from 'react';

const Background = () => {
  return (
    <>
      <div className="bg-animation"></div>

      <div className="bg-orbit-layer" aria-hidden="true">
        <span className="bg-orbit-dot dot-1"></span>
        <span className="bg-orbit-dot dot-2"></span>
        <span className="bg-orbit-dot dot-3"></span>
        <span className="bg-orbit-dot dot-4"></span>

        <span className="shooting-star star-1"></span>
        <span className="shooting-star star-2"></span>
        <span className="shooting-star star-3"></span>
        <span className="shooting-star star-4"></span>
        <span className="shooting-star star-5"></span>
        <span className="shooting-star star-6"></span>
      </div>
    </>
  );
};

export default Background;