import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Slide from './Slide';

const Home = () => {
  const navigate = useNavigate();

  const handleHousesClick = () => {
    navigate('/Houses');
  };
  const handleSignUpClick = () => {
    navigate('/SignUp');
  };
  const handleAboutClick = () => {
    navigate('/About');
  };
  const handleContactClick = () => {
    navigate('/Contact');
  };
  const handleServiceClick = () => {
    navigate('/Service');
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <nav>
          <div className="menu-bar">
            <ul>
              <li><a onClick={handleHomeClick} href="#home">Home</a></li>
              <li><a onClick={handleAboutClick} href="#about">About</a></li>
              <li><a onClick={handleHousesClick} href="#book">Properties</a></li>
              <li><a onClick={handleContactClick} href="#contact">Contact</a></li>
              <li><a onClick={handleServiceClick} href="#services">Service</a></li>
            </ul>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </div>
            <div className="user-actions">
              <button onClick={handleSignUpClick} className="signup-btn">SignUp</button>
            </div>
          </div>
        </nav>

        <div className="header">
          <h1 className='heading'>Welcome to Your Dream Home!</h1>
          <p className="sub-heading">Find your perfect home to rent.</p>
        </div>
        <Slide />
      </div>

      <div className='Econtent'>
        <strong><h3 className='center-text'>
          Over 134,896+ Happy Users Being With Us Still They Love Our Services
        </h3></strong>
        
        <div className='million'>
          <div className="Econtent-item">
            <i className="fa fa-trophy"></i>
            <p>32M</p>
          </div>
          <div className="Econtent-item">
            <i className="fa fa-suitcase"></i>
            <p>43M</p>
          </div>
          <div className="Econtent-item">
            <i className="fa fa-lightbulb"></i>
            <p>51M</p>
          </div>
          <div className="Econtent-item">
            <i className="fa fa-heart"></i>
            <p>42M</p>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-section">
          <div className="locations">
            <p>POPULAR LOCATIONS</p>
            <p>Kolkata</p>
            <p>Mumbai</p>
            <p>Chennai</p>
            <p>Pune</p>
          </div>
          <div className='trend'>
            <p>TRENDING LOCATIONS</p>
            <div>
              <p>Bhubaneshwar</p>
              <p>Hyderabad</p>
              <p>Chandigarh</p>
              <p>Nashik</p>

            </div>
          </div>
          
          <div className="follow-us">
            <p>FOLLOW US</p>
            <div className="icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
