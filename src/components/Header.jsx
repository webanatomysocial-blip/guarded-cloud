import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCaretDown,
  FaShieldAlt,
  FaCloud,
  FaUserShield,
  FaBalanceScale,
  FaClipboardCheck,
  FaEye,
} from "react-icons/fa";
import debounce from "lodash.debounce";
import "../css/Header.css";
import logo from "../assets/gaurdmainlogo.png";

function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Mobile submenu state
  const [isHeaderWhite, setIsHeaderWhite] = useState(false); // New state for header background
  const dropdownRef = useRef(null);
  const headerRef = useRef(null); // Ref for the header element
  const debouncedHideMenuRef = useRef(null);

  // Debounced hide mega menu
  const getDebouncedHideMenu = useCallback(() => {
    if (!debouncedHideMenuRef.current) {
      debouncedHideMenuRef.current = debounce(() => {
        setIsMegaMenuOpen(false);
      }, 300);
    }
    return debouncedHideMenuRef.current;
  }, []);

  const handleMouseEnter = () => {
    getDebouncedHideMenu().cancel();
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = (e) => {
    const fromElement = e.relatedTarget;
    if (dropdownRef.current && !dropdownRef.current.contains(fromElement)) {
      getDebouncedHideMenu()();
    }
  };

  // Intersection Observer to detect when header is over #home-banner
useEffect(() => {
  const homeBanner = document.getElementById("home-banner");

  if (!homeBanner) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // If the #home-banner is intersecting with the viewport, set header to white
      setIsHeaderWhite(entry.isIntersecting);
    },
    {
      root: null, // Use viewport as root
      threshold: 0.1, // Trigger when 10% of #home-banner is visible
    }
  );

  observer.observe(homeBanner);

  return () => {
    observer.disconnect(); // Cleanup observer on unmount
    getDebouncedHideMenu().cancel();
  };
}, [getDebouncedHideMenu]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsMobileServicesOpen(false); // Close submenu when closing mobile menu
    }
  };

  return (
    <header
      className={`header ${isHeaderWhite ? "white-bg" : ""}`}
      ref={headerRef}
    >
      {/* Left logo */}
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className="navigation only-windows">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
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
                  <Link to="/cloud-security-monitoring">
                    Cloud Security Monitoring & Threat Detection
                  </Link>
                </div>
                <div className="mega-item">
                  <FaCloud className="mega-icon" />
                  <Link to="/cloud-infrastructure-protection">
                    Cloud Infrastructure Protection
                  </Link>
                </div>
                <div className="mega-item">
                  <FaUserShield className="mega-icon" />
                  <Link to="/identity-access-management">
                    Identity & Access Management (IAM)
                  </Link>
                </div>
                <div className="mega-item">
                  <FaBalanceScale className="mega-icon" />
                  <Link to="/cloud-compliance-governance">
                    Cloud Compliance & Governance
                  </Link>
                </div>
                <div className="mega-item">
                  <FaClipboardCheck className="mega-icon" />
                  <Link to="/advisory-managed-security">
                    Advisory & Managed Security Services
                  </Link>
                </div>
                <div className="mega-item">
                  <FaShieldAlt className="mega-icon" />
                  <Link to="/managed-detection-response">
                    Managed Detection and Response
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="nav-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile hamburger */}
      <div className="hamburger only-mobile" onClick={toggleMenu}>
        <FaBars size={24} />
      </div>

      {/* Mobile sidebar menu */}
      <div className={`mobile-menu only-mobile ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <FaTimes size={24} className="close-icon" onClick={toggleMenu} />
        </div>
        <ul className="mobile-nav-list">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <span
              className="mobile-nav-link"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Services <FaCaretDown />
            </span>
            {isMobileServicesOpen && (
              <ul className="mobile-submenu">
                <li>
                  <Link to="/cloud-security-monitoring" onClick={toggleMenu}>
                    Cloud Security Monitoring & Threat Detection
                  </Link>
                </li>
                <li>
                  <Link to="/cloud-infrastructure-protection" onClick={toggleMenu}>
                    Cloud Infrastructure Protection
                  </Link>
                </li>
                <li>
                  <Link to="/identity-access-management" onClick={toggleMenu}>
                    Identity & Access Management (IAM)
                  </Link>
                </li>
                <li>
                  <Link to="/cloud-compliance-governance" onClick={toggleMenu}>
                    Cloud Compliance & Governance
                  </Link>
                </li>
                <li>
                  <Link to="/advisory-managed-security" onClick={toggleMenu}>
                    Advisory & Managed Security Services
                  </Link>
                </li>
                <li>
                  <Link to="/managed-detection-response" onClick={toggleMenu}>
                    Managed Detection and Response
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;