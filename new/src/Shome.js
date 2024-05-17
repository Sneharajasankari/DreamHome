// Slide.js
import React, { useState, useEffect } from 'react';
import './Shome.css';

const Shome = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % 3); // Assuming you have 3 slides
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className={`mySlides ${slideIndex === 0 ? 'active' : ''}`}>
        <img 
          src="/public/home1.1.jpg"
          alt="House 1"
          className="house-image"
        />
      </div>
      <div className={`mySlides ${slideIndex === 1 ? 'active' : ''}`}>
        <img 
          src="/public/home1.2.jpg"
          alt="House 2"
          className="house-image"
        />
      </div>
      <div className={`mySlides ${slideIndex === 2 ? 'active' : ''}`}>
        <img 
          src="/public/home1.3.jpg"
          alt="House 3"
          className="house-image"
        />
      </div>
    </div>
  );
};

export default Shome;
