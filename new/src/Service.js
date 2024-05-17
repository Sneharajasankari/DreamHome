import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

    

const Service = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
      };
      const handlePropertiesClick = () => {
        navigate('/Houses');
      };





  return (
    <div className="service-container">
      <h2>Our Services</h2>
      <div className="service-card">
        <div className="service-icon">
          <i className="fas fa-home"></i>
        </div>
        <div className="service-info">
          <h3>Rentals</h3>
          <p>Find your perfect rental property with us.</p>
          <button onClick={handleHomeClick}>Home</button>
        </div>
        
      </div>
      <div className="service-card">
        <div className="service-icon">
          <i className="fas fa-building"></i>
        </div>
        <div className="service-info">
          <h3>Property Management</h3>
          <p>Manage your property efficiently with our services.</p>
          <button onClick={handlePropertiesClick}>property</button>
        </div>
      </div>
      <div className="service-card">
        <div className="service-icon">
          <i className="fas fa-user"></i>
          <i className="fas fa-user"></i>
        </div>
        <div className="service-info">
          <h3>Tenant Screening</h3>
          <p>Screen tenants to find the best fit for your property.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
