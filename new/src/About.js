import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % 4); // Assuming you have 4 images
    }, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <div className="slideshow">
        <img src="/about4.jpg" alt="Slide 1" className={currentSlide === 0 ? "slide active" : "slide"} />
        <img src="/about4.jpg" alt="Slide 2" className={currentSlide === 1 ? "slide active" : "slide"} />
        {/* <img src="/about2.avif" alt="Slide 2" className={currentSlide === 1 ? "slide active" : "slide"} />
        <img src="/about3.jpeg" alt="Slide 3" className={currentSlide === 2 ? "slide active" : "slide"} />
        <img src="/contact3.jpeg" alt="Slide 4" className={currentSlide === 3 ? "slide active" : "slide"} /> */}
      </div>
      <div className="text-container">
        <h1>About Us</h1>
        <p>Welcome to our home rental app! We strive to provide the best experience for both renters and landlords. Our platform makes it easy to find the perfect home or list your property for rent.</p>
        <p>Feel free to reach out to us if you have any questions or feedback. Happy renting!</p>
      </div>
    </div>
  );
}

export default About;
