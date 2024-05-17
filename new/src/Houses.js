import React from 'react';
import './Houses.css';
import { useNavigate } from 'react-router-dom';




const Houses = () => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate('/Book');

    // Handle click for booking house
  };
  const handleImageClick = () => {
    navigate('/Shome');

    // Handle click for booking house
  };

  return (
    <div className="houses-container">
      <h2 className="houses-heading">Available Houses</h2>
      <div className="house-list">
        
        {/* House 1 */}
        <div className="house-item">
        {/* <video controls width="400" height="300">
        <source src="/home video1.mp4" type="video/mp4" />
      </video> */}
          <img onClick={handleImageClick} src="/image/home1.jpeg" alt="House 1" className="house-image" /> 
          <div className="house-details">
            <strong><p>Chennai  North</p></strong>
            <p className="house-description">3 BHK</p>
            <p className="house-price">Price: $1000/month</p>
            <p>Highlights:East Facing Full Power Backup</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>
        
        {/* House 2 */}
        <div className="house-item">
          <img src="/image/home2.jpeg" alt="House 2" className="house-image" />
          <div className="house-details">
            <strong><p>Evergreen Avenue</p></strong>
            <p className="house-description">2 BHK</p>
            <p className="house-price">Price: $1200/month</p>
            <p>Highlights:Fresh Construction</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>
        
        {/* House 3 */}
        <div className="house-item">
          <img src="/image/home3.jpeg" alt="House 3" className="house-image" />
          <div className="house-details">
            <strong><p>Woodland Cottage</p></strong>
            <p className="house-description">5 BHK</p>
            <p className="house-price">Price: $1400/month</p>
            <p>highlights:Close to Airport</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>
        
        {/* Repeat the structure for the remaining houses */}
        
        {/* House 4 */}
        <div className="house-item">
          <img src="/image/home4.jpeg" alt="House 4" className="house-image" />
          <div className="house-details">
            <strong><p>Coimbatore</p></strong>
            <p className="house-description">3 BHK</p>
            <p className="house-price">Price: $1300/month</p>
            <p>Highlights:North Facing Air Conditioned</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>
        
        {/* House 5 */}
        <div className="house-item">
          <img src="/image/home5.jpeg" alt="House 5" className="house-image" />
          <div className="house-details">
            <strong>Sekkalai,Karaikudi</strong>
            <p className="house-description">3 BHK</p>
            <p>Highlights:North Facing Private Garden</p>
            <p className="house-price">Price: $1300/month</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>

        

        <div className="house-item">
          <img src="/image/home6.jpeg" alt="House 6" className="house-image" />
          <div className="house-details">
            <strong><p>Villupuram</p></strong>
            <p className="house-description">2 BHK</p>
            <p className="house-price">Price: $1300/month</p>
            <p>Highlights:Close to School</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>

       

        

        

        

        <div className="house-item">
          <img src="/image/home7.jpeg" alt="House 7" className="house-image" />
          <div className="house-details">
            <strong>House 7</strong>
            <p className="house-description">Description of House 7</p>
            <p className="house-price">Price: $1300/month</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>

        <div className="house-item">
          <img src="/image/home8.jpeg" alt="House 8" className="house-image" />
          <div className="house-details">
            <strong>House 8</strong>
            <p className="house-description">Description of House 8</p>
            <p className="house-price">Price: $1300/month</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>


        <div className="house-item">
          <img src="/image/home3.jpeg" alt="House 9" className="house-image" />
          <div className="house-details">
            <strong>House 9</strong>
            <p className="house-description">Description of House 9</p>
            <p className="house-price">Price: $1300/month</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>



        <div className="house-item">
          <img src="/image/home10.jpeg" alt="House 6" className="house-image" />
          <div className="house-details">
            <strong>House 10</strong>
            <p className="house-description">Description of House 10</p>
            <p className="house-price">Price: $1300/month</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>


        <div className="house-item">
          <img src="/image/home11.jpeg" alt="House 11" className="house-image" />
          <div className="house-details">
            <strong>House 11</strong>
            <p className="house-description">Description of House 11</p>
            <p className="house-price">Price: $1300/month</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>
        
        <div className="house-item">
          <img src="/image/home12.jpeg" alt="House 12" className="house-image" />
          <div className="house-details">
            <strong>House 12</strong>
            <p className="house-description">Description of House 12</p>
            <p className="house-price">Price: $1300/month</p>
            <button onClick={handleBookClick} className='book-btn'>Book</button>
          </div>
        </div>
        
        {/* Continue this pattern for the remaining houses */}
        
      </div>
    </div>
  );
};

export default Houses;
