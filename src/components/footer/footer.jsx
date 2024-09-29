import React from 'react';
import { MdEmail, MdArrowForwardIos, MdLocationPin } from 'react-icons/md'; 
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';


const Footer = () => {
  return (
    <div className="footer"> 
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at enim sed massa lobortis imperdiet.</p>
          </div>
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 Your Website. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;