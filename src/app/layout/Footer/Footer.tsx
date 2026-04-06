import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/footer/Logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + nombre */}
        <div className="footer-section logo-section">
          <img src={logo} alt="Hotel Ocean Caribbean" className="logo-img" />
          <p>Hotel Ocean Caribbean</p>
        </div>

        {/* Menú */}
        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/booking">Online Reservation</Link></li>
            <li><Link to="/#facilities">Facilities</Link></li>
            <li><Link to="/#location">How to get there</Link></li>
            <li><Link to="/#about">About Us</Link></li>
          </ul>
        </div>

        {/* Location */}
        <div className="footer-section">
          <h3>Location</h3>
          <p>
            The hotel is located fifty yards from Playa Carmen in the middle
            of the natural beauty and excitement of Santa Teresa, Cóbano,
            Puntarenas.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>+1 (305) 853 8700</p>
          <p>+506 2640 0404</p>
          <p>+506 8550 0444</p>
          <p>reservations@hotelanteresa.com</p>
        </div>
      </div>
    </footer>
  );
};