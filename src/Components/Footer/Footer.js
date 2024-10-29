// src/Footer.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';

const Footer = () => {
  const [sendmsgbtn,setsendmsgbtn]= useState("Send Message");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message
    };

    emailjs.send(
      'service_6o9pm0h',
      'template_h41qt1d',
      templateParams,
      'gPB64EIQbI4dptM3t'
    )
    .then((result) => {
        console.log('Email successfully sent!', result.text);
        // Clear form after successful submission
        setFormData({ name: '', email: '', phone: '', message: '' });
        setsendmsgbtn("Message Sent...");
        setTimeout(()=>{
          setsendmsgbtn("Send Message");
        },1500)
    })
    .catch((error) => {
        console.error('There was an error sending the email:', error.text);
        setsendmsgbtn("Error Sending Message...");
        setTimeout(()=>{
          setsendmsgbtn("Send Message");
        },1500)
    });
  };

  return (
    <div className="footer" id="contact">
      <div className="footer-form">
        <h2>Connect with me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{sendmsgbtn}</button>
        </form>
      </div>
      <div className="footer-contact">
        <h2>Contact Information</h2>
        <div className="data">
          <p>Email: anmolpreetkhiva@gmail.com</p>
          <p>Phone: +91-7814778503</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
