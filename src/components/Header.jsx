import React from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa"; // Import the caret down icon
import "../css/Header.css";
import logo from  '../assets/images/veed-logo.png'; 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo"><img src={logo} alt="VEED Logo" /></Link>

        <nav className="navigation">
        <ul className="nav-list">
          <li>
            <Link to="/product" className="nav-link">
              Product <FaCaretDown className="dropdown-icon" />
            </Link>
          </li>
          <li>
            <Link to="/use-cases" className="nav-link">
              Use Cases <FaCaretDown className="dropdown-icon" />
            </Link>
          </li>
          <li>
            <Link to="/ai" className="nav-link">
              AI <FaCaretDown className="dropdown-icon" />
            </Link>
          </li>
          <li>
            <Link to="/resources" className="nav-link">
              Resources <FaCaretDown className="dropdown-icon" />
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
      </div>
      
      <div className="button-group">
        <button className="demo-button">Request a Demo</button>
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;