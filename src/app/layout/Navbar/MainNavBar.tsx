import { useState } from "react";
import "./MainNavBar.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Booking", path: "/booking" },
    { name: "Offers", path: "/offers" },
    { name: "Rooms", path: "/rooms" },
  ];

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-left">
          <span className="navbar-logo">Hotel Caribbean Ocean</span>
        </div>

        {/* Botón hamburguesa (visible en responsive) */}
        <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Links Desktop */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/offers" className="nav-link">Offers</Link>
          <Link to="/rooms" className="nav-link">Rooms</Link>
          <Link to="/booking" className="nav-link">Online Reservation</Link>
          <Link to="/#facilities" className="nav-link">Facilities</Link>
          <Link to="/#location" className="nav-link">How to get there</Link>
          <Link to="/#about" className="nav-link">About Us</Link>
          <Link to="/#footer" className="nav-link">Contact Us</Link>
        </div>

        {/* Links Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/offers" className="nav-link" onClick={closeMenu}>Offers</Link>
          <Link to="/rooms" className="nav-link" onClick={closeMenu}>Rooms</Link>
          <Link to="/booking" className="nav-link" onClick={closeMenu}>Online Reservation</Link>
          <Link to="/#facilities" className="nav-link" onClick={closeMenu}>Facilities</Link>
          <Link to="/#location" className="nav-link" onClick={closeMenu}>How to get there</Link>
          <Link to="/#about" className="nav-link" onClick={closeMenu}>About Us</Link>
          <Link to="/#footer" className="nav-link" onClick={closeMenu}>Contact Us</Link>
        </div>

      </div>
    </nav>
  );
}
