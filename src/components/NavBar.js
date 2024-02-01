import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    toggleNav();
  };

  return (
    <header>
      <nav className="navbar">
        <img
          src={`${process.env.PUBLIC_URL}/images/Logo.png`}
          alt="Your Logo"
          className="logo"
        />
        <div className={`nav-links ${isNavOpen ? "show" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={activeLink === "/" ? "active" : ""}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/Projects"
                onClick={() => handleLinkClick("/Projects")}
                className={activeLink === "/Projects" ? "active" : ""}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                onClick={() => handleLinkClick("/Services")}
                className={activeLink === "/Services" ? "active" : ""}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                onClick={() => handleLinkClick("/About")}
                className={activeLink === "/About" ? "active" : ""}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/Inquiries"
                onClick={() => handleLinkClick("/Inquiries")}
                className={activeLink === "/Inquiries" ? "active" : ""}
              >
                INQUIRIES
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`icon ${isNavOpen ? "active" : ""}`}
          onClick={toggleNav}
        >
          &#9776; {/* Burger icon */}
        </div>
      </nav>
    </header>
  );
}
