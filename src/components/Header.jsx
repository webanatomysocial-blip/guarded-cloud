import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaShieldAlt, FaCloud, FaUserShield, FaBalanceScale, FaClipboardCheck, FaEye } from "react-icons/fa";
import debounce from "lodash.debounce"; // Ensure this is installed
import "../css/Header.css";
import logo from '../assets/gaurdmainlogo.png';

function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const debouncedHideMenuRef = useRef(null); // Ref to hold the debounced function

  // Create debounced hide function with useCallback
  const getDebouncedHideMenu = useCallback(() => {
    if (!debouncedHideMenuRef.current) {
      debouncedHideMenuRef.current = debounce(() => {
        console.log("Timeout executed - Hiding mega menu");
        setIsMegaMenuOpen(false);
      }, 300); // 300ms delay
    }
    return debouncedHideMenuRef.current;
  }, []); // Empty dependency array is safe

  // Handle mouse enter to show mega menu
  const handleMouseEnter = () => {
    console.log("Mouse entered - Showing mega menu");
    getDebouncedHideMenu().cancel(); // Cancel any pending debounce
    setIsMegaMenuOpen(true);
  };

  // Handle mouse leave to hide mega menu
  const handleMouseLeave = (e) => {
    const fromElement = e.relatedTarget;
    if (dropdownRef.current && !dropdownRef.current.contains(fromElement)) {
      console.log("Mouse left - Starting delay");
      getDebouncedHideMenu()(); // Trigger the debounced hide
    }
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      getDebouncedHideMenu().cancel(); // Cleanup debounce on unmount
    };
  }, [getDebouncedHideMenu]); // Include getDebouncedHideMenu as dependency

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={logo} alt="VEED Logo" />
        </Link>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>

          {/* Mega Menu */}
          <li
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">
              Services <FaCaretDown className="dropdown-icon" />
            </span>
            <div className={`mega-menu ${isMegaMenuOpen ? "open" : ""}`}>
              <div className="inner-mega-menu">
                <div className="mega-item">
                  <FaEye className="mega-icon" />
                  <Link to="/cloud-security-monitoring">Cloud Security Monitoring & Threat Detection</Link>
                </div>
                <div className="mega-item">
                  <FaCloud className="mega-icon" />
                  <Link to="/cloud-infrastructure-protection">Cloud Infrastructure Protection</Link>
                </div>
                <div className="mega-item">
                  <FaUserShield className="mega-icon" />
                  <Link to="/identity-access-management">Identity & Access Management (IAM)</Link>
                </div>
                <div className="mega-item">
                  <FaBalanceScale className="mega-icon" />
                  <Link to="/cloud-compliance-governance">Cloud Compliance & Governance</Link>
                </div>
                <div className="mega-item">
                  <FaClipboardCheck className="mega-icon" />
                  <Link to="/advisory-managed-security">Advisory & Managed Security Services</Link>
                </div>
                <div className="mega-item">
                  <FaShieldAlt className="mega-icon" />
                  <Link to="/managed-detection-response">Managed Detection and Response</Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;