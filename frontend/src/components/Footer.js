// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and Contact */}
        <div className="footer-section">
          <h2 className="logo">MOB FACTORY</h2>
          <p>info@mobfactory.com</p>
          <p>+91 98765 43210</p>
          <p>133 Fashion Street, Mumbai, India</p>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Shop Links */}
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>Summer Collection 2025</li>
            <li>Outfits</li>
            <li>Essentials</li>
            <li>Best Sellers</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <p>Subscribe to our newsletter for the latest updates, offers, and releases.</p>
          <div className="social-icons">
            <span>🟦</span>
            <span>📷</span>
            <span>🦩</span>
          </div>
          <div className="newsletter">
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
