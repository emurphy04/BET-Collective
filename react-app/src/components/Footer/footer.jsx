import React from 'react';
import './footer.css'; // Ensure the correct path
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons

function Footer() {
  return (
    <>
    <br /><br /><br /><br />
      <div className="footer-container">
        <footer className="footer">
          {/* Logo Section */}
          <div className="footer-section logo-section">
            <img src="/images/logo.png" alt="Logo" width="100%" height="100%" />
          </div>

          {/* Company Links and Address */}
          <div className="footer-section company-links">
            <h4>The BET Collective</h4>
            <address>
              123 BET St.<br />
              Keyin College<br />
              Creativity City, NL <br />
              Innovation 45678 <br />
              <b>Phone:</b> (709) 555-1234<br />
            </address>
            </div>
          {/* Customer Support Section */}
          <div className="footer-section customer-support">
            <h4>Customer Service</h4>
            <ul>
              <li><Link to="/underconstruction" className="navText">About BET</Link></li>
              <li><Link to="/underconstruction" className="navText">FAQs</Link></li>
              <li><Link to="/underconstruction" className="navText">Support Policies</Link></li>
            </ul>
          </div>
          {/* Shopping Links */}
          <div className="footer-section shopping-links">
          <h4>Shop The BET</h4>
              <ul>
              <li><Link to="/products/all" className="navText">All Products</Link></li>
              <li><Link to="/products/clothing" className="navText">Clothing</Link></li>
              <li><Link to="/products/accessories" className="navText">Accessories</Link></li>
              <li><Link to="/products/home-living" className="navText">Home + Living</Link></li>
              <li><Link to="/products/tech-travel" className="navText">Tech + Travel</Link></li>
              <li><Link to="/products/fun-gifts" className="navText">Fun Gifts</Link></li>
            </ul>
          </div>
          
          <div className="footer-section newsletter-social">
          <div>
            <h4>The BET CodeBox</h4>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="subscribe">Subscribe</button>
            </form>
          </div>
          <br />
          <div className="social-icons">
            <h4>Follow Us</h4>
            <br /><br />
            <Link to="//facebook.com" target="_blank" className="icon"><FaFacebookF /></Link>
            <Link to="//twitter.com" target="_blank" className="icon"><FaTwitter /></Link>
            <Link to="//instagram.com" target="_blank" className="icon"><FaInstagram /></Link>
          </div>
        </div>

        </footer>
      </div>
    </>
  );
}

export default Footer;
