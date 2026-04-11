import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/footer/logo.png";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">

      {/* Decorative top border */}
      <div className="footer-accent" />

      <div className="footer-container">

        {/* Column 1: Logo + Brand */}
        <div className="footer-section footer-brand">
          <img src={logo} alt="Caribbean Ocean Resort & Spa logo" className="footer-logo-img" />
          <div className="footer-brand-text">
            <span className="footer-brand-name">Caribbean Ocean</span>
            <span className="footer-brand-tagline">Resort & Spa</span>
          </div>
          <p className="footer-brand-desc">
            Where the jungle meets the sea. Discover paradise on the shores of
            Puerto Viejo de Talamanca, Costa Rica.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook" className="footer-social-icon"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="footer-social-icon"><FaInstagram /></a>
            <a href="#" aria-label="TripAdvisor" className="footer-social-icon"><FaTripadvisor /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-links">
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/rooms">Rooms & Rates</Link></li>
            <li><Link to="/booking">Online Reservation</Link></li>
            <li><Link to="/#facilities">Facilities</Link></li>
            <li><Link to="/#location">How to get there</Link></li>
            <li><Link to="/#about">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Location */}
        <div className="footer-section">
          <h3 className="footer-heading">Location</h3>
          <div className="footer-location">
            <FiMapPin className="footer-icon" />
            <p>
              The hotel is located fifty yards from Playa Cocles in the middle
              of the natural beauty of Puerto Viejo de Talamanca, Limón, Costa Rica.
            </p>
          </div>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <FiPhone className="footer-icon" />
              <span>+1 (305) 853 8700</span>
            </li>
            <li>
              <FiPhone className="footer-icon" />
              <span>+506 2640 0404</span>
            </li>
            <li>
              <FaWhatsapp className="footer-icon" />
              <span>+506 8550 0444</span>
            </li>
            <li>
              <FiMail className="footer-icon" />
              <a href="mailto:reservations@hotelcaribbean.com">
                reservations@hotelcaribbean.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Caribbean Ocean Resort & Spa. All rights reserved.</p>
        <a href="#" className="footer-privacy">Privacy Policy</a>
      </div>

    </footer>
  );
};