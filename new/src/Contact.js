// Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label   htmlFor="name">Name:</label>
              <input placeholder='Enter Your Name' type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input placeholder='Enter Your Email' type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label  className='aa' htmlFor="message">Message:</label>
              <textarea placeholder='Type your Message Here!' id="message" name="message" rows="4" required></textarea>
            </div>
            <button className='xxx' type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: info@homerentalapp.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Address: 123 Main Street, Chennai, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
