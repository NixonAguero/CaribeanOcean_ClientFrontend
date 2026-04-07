
import { NavLink } from "react-router-dom";
import "./MainNavBar.css"
export default function Navbar() {
  
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
          <div className="navbar-links">
            {routes.map((route) => (
              <NavLink
                key={route.name}
                to={route.path}
                className={linkClasses}
              >
                {route.name}
              </NavLink>
            ))}
          </div>  
        </div>
    </nav>
  );
}
