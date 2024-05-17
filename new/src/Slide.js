import React, { useState, useEffect } from 'react';
import './Slide.css';

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % 5); // Assuming you have 3 slides
    }, 2000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="slideshow-container">
      {/* Render your slides conditionally based on slideIndex */}
      <div className={`mySlides ${slideIndex === 0 ? 'fade' : ''}`} style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
        <img 
          src="https://images.chiangmaicitylife.com/clg/wp-content/uploads/2024/03/6.Settasiri-Ruamchok.jpg?auto=format&crop=entropy&dpr=1&fit=crop&fm=jpg&h=597&q=45&w=1140&s=db6e0548cbead97eebc92c61701a71ee"
          alt="House 1"
          className="house-image"
        />
        <div className="hover-paragraph">
          <p>Experience the serenity of nature in this enchanting woodland retreat. Embrace the charm of rustic living while enjoying modern comforts.</p>
        </div>
      </div>
      <div className={`mySlides ${slideIndex === 1 ? 'fade' : ''}`} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
        <img 
          src="https://snoopy.archdaily.com/images/archdaily/catalog/uploads/photo/image/216056/full_Hudson-River-House-back-deck-5.jpg?width=1024&format=webp"
          alt="House 2"
          className="house-image"
        />
        <div className="hover-paragraph">
          <p>Indulge in breathtaking panoramic views of the Hudson River from this modern architectural masterpiece. Every corner designed to inspire and delight.</p>
        </div>
      </div>
      <div className={`mySlides ${slideIndex === 2 ? 'fade' : ''}`} style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
        <img 
          src="https://images.adsttc.com/media/images/5f22/1a8c/b357/653f/3b00/063c/medium_jpg/14_Hudson_River_House.jpg?1596070531"
          alt="House 3"
          className="house-image"
        />
        <div className="hover-paragraph">
          <p>Discover the epitome of luxury living in this exquisite riverside residence. Unwind in style amidst sophisticated design and unparalleled elegance.</p>
        </div>
      </div>
      <div className={`mySlides ${slideIndex === 3 ? 'fade' : ''}`} style={{ display: slideIndex === 3 ? 'block' : 'none' }}>
        <img 
          src="https://snoopy.archdaily.com/images/archdaily/catalog/uploads/photo/image/328946/full_Project-Hillside-House-Linvisibile-3.jpg?width=1024&format=webp"
          alt="House 4"
          className="house-image"
        />
        <div className="hover-paragraph">
          <p>Escape to a secluded hillside sanctuary where luxury meets tranquility. Immerse yourself in the beauty of nature while enjoying modern amenities.</p>
        </div>
      </div>
      <div className={`mySlides ${slideIndex === 4 ? 'fade' : ''}`} style={{ display: slideIndex === 4 ? 'block' : 'none' }}>
        <img 
          src="https://snoopy.archdaily.com/images/archdaily/catalog/uploads/photo/image/359434/full_SPA-CHIS-AWS-001.jpg?width=1024&format=webp"
          alt="House 5"
          className="house-image"
        />
        <div className="hover-paragraph">
          <p>Immerse yourself in the ultimate resort-style living experience. This stunning architectural marvel offers luxury, comfort, and unparalleled leisure facilities.</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
