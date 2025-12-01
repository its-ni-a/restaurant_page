import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Insta</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Business Hours</h3>
            <p>Monday - Saturday: 11:00 AM - 10:00 PM</p>
            <p>Sunday: 12:00 PM - 9:00 PM</p>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <p>123 Italian Way</p>
            <p>New York, NY 10001</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
