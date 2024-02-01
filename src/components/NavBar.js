import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <img
          src={`${process.env.PUBLIC_URL}/images/Logo.png`}
          alt="Your Logo"
          className="logo"
        />
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/Services">SERVICES</Link>
            </li>
            <li>
              <Link to="/About">ABOUT US</Link>
            </li>
            <li>
              <Link to="/Inquiries">INQUIRIES</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
