import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    fromDate: '',
    toDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dreamhome-kn6e.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add booking');
      }

      // Reset the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        fromDate: '',
        toDate: ''
      });

      console.log('Booking added successfully!');
    } catch (error) {
      console.error('Error adding booking:', error.message);
    }
  };

  return (
    <div className='xyz'>
      <h1>ENTER YOUR DETAILS</h1>
      <div className="booking-container">
        <form onSubmit={handleFormSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="firstName">First name:</label>
                </td>
                <td>
                  <input placeholder='Enter Your FirstName' type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lastName">Last name:</label>
                </td>
                <td>
                  <input placeholder='Enter Your LastName' type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email:</label>
                </td>
                <td>
                  <input placeholder='Enter Your Email' type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="fromDate">From Date:</label>
                </td>
                <td>
                  <input placeholder='Enter Your Start Date' type="date" id="fromDate" name="fromDate" value={formData.fromDate} onChange={handleInputChange} required />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="toDate">To Date:</label>
                </td>
                <td>
                  <input placeholder='Enter To Date' type="date" id="toDate" name="toDate" value={formData.toDate} onChange={handleInputChange} required />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <br />
                  <br />
                  <button className="book" type="submit">Book</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Book;
