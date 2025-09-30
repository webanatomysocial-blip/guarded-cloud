import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCaretDown,
  FaShieldAlt,
  FaCloud,
  FaUserShield,
  FaNetworkWired,
  FaEnvelopeOpenText,
  FaLock,
  FaBug,
  FaDatabase,
  FaLifeRing,
} from "react-icons/fa";
import debounce from "lodash.debounce";
import "../css/Header.css";
import logo from "../assets/gaurdmainlogo.png";

function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isHeaderWhite, setIsHeaderWhite] = useState(true);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);
  const debouncedHideMenuRef = useRef(null);
  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHeaderWhite(false);
      return;
    }

    setIsHeaderWhite(true);
    const homeBanner = document.getElementById("home-banner");
    if (!homeBanner) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderWhite(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(homeBanner);

    return () => {
      observer.disconnect();
      getDebouncedHideMenu().cancel();
    };
  }, [location.pathname, getDebouncedHideMenu]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsMobileServicesOpen(false);
  };

  return (
    <header
      className={`header ${isHeaderWhite ? "white-bg" : "blur-bg"}`}
      ref={headerRef}
    >
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="navigation only-windows">
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
            <Link to="/solutions" className="nav-link">
              Solutions <FaCaretDown className="dropdown-icon" />
            </Link>
            <div className={`mega-menu ${isMegaMenuOpen ? "open" : ""}`}>
              <div className="inner-mega-menu">
                <div className="mega-item">
                  <FaCloud className="mega-icon" />
                  <Link to="/cloud-security-posture">
                    Cloud Security Posture (CSPM)
                  </Link>
                </div>
                <div className="mega-item">
                  <FaShieldAlt className="mega-icon" />
                  <Link to="/managed-detection-response">
                    Managed Detection and Response (MDR/XDR)
                  </Link>
                </div>
                <div className="mega-item">
                  <FaUserShield className="mega-icon" />
                  <Link to="/zero-trust-identity">Zero Trust & Identity</Link>
                </div>
                <div className="mega-item">
                  <FaNetworkWired className="mega-icon" />
                  <Link to="/firewall-network-security">
                    Firewall & Network Security (Palo Alto focus)
                  </Link>
                </div>
                <div className="mega-item">
                  <FaEnvelopeOpenText className="mega-icon" />
                  <Link to="/email-collaboration-security">
                    Email & Collaboration Security
                  </Link>
                </div>
                <div className="mega-item">
                  <FaLock className="mega-icon" />
                  <Link to="/data-protection-dlp">Data Protection & DLP</Link>
                </div>
                <div className="mega-item">
                  <FaBug className="mega-icon" />
                  <Link to="/vulnerability-patch-management">
                    Vulnerability & Patch Management
                  </Link>
                </div>
                <div className="mega-item">
                  <FaDatabase className="mega-icon" />
                  <Link to="/backup-disaster-recovery">
                    Backup & Disaster Recovery
                  </Link>
                </div>
                <div className="mega-item">
                  <FaLifeRing className="mega-icon" />
                  <Link to="/incident-response-retainer">
                    Incident Response Retainer
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li><Link to="/industries" className="nav-link">Industries</Link></li>
          <li><Link to="/how-we-work" className="nav-link">How We Work</Link></li>
          <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
          <li><Link to="/security" className="nav-link">Security</Link></li>
          <li><Link to="/case-studies" className="nav-link">Case Studies</Link></li>
          <li><Link to="/resources" className="nav-link">Resources</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <div className="hamburger only-mobile" onClick={toggleMenu}>
        <FaBars size={24} />
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu only-mobile ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <FaTimes size={24} className="close-icon" onClick={toggleMenu} />
        </div>
        <ul className="mobile-nav-list">
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <span
              className="mobile-nav-link"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Solutions <FaCaretDown />
            </span>
            {isMobileServicesOpen && (
              <ul className="mobile-submenu">
                <li>
                  <FaCloud className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/cloud-security-posture" onClick={toggleMenu}>
                    Cloud Security Posture (CSPM)
                  </Link>
                </li>
                <li>
                  <FaShieldAlt className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/managed-detection-response" onClick={toggleMenu}>
                    Managed Detection and Response (MDR/XDR)
                  </Link>
                </li>
                <li>
                  <FaUserShield className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/zero-trust-identity" onClick={toggleMenu}>
                    Zero Trust & Identity
                  </Link>
                </li>
                <li>
                  <FaNetworkWired className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/firewall-network-security" onClick={toggleMenu}>
                    Firewall & Network Security
                  </Link>
                </li>
                <li>
                  <FaEnvelopeOpenText className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/email-collaboration-security" onClick={toggleMenu}>
                    Email & Collaboration Security
                  </Link>
                </li>
                <li>
                  <FaLock className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/data-protection-dlp" onClick={toggleMenu}>
                    Data Protection & DLP
                  </Link>
                </li>
                <li>
                  <FaBug className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/vulnerability-patch-management" onClick={toggleMenu}>
                    Vulnerability & Patch Management
                  </Link>
                </li>
                <li>
                  <FaDatabase className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/backup-disaster-recovery" onClick={toggleMenu}>
                    Backup & Disaster Recovery
                  </Link>
                </li>
                <li>
                  <FaLifeRing className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/incident-response-retainer" onClick={toggleMenu}>
                    Incident Response Retainer
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li><Link to="/industries" onClick={toggleMenu}>Industries</Link></li>
          <li><Link to="/how-we-work" onClick={toggleMenu}>How We Work</Link></li>
          <li><Link to="/pricing" onClick={toggleMenu}>Pricing</Link></li>
          <li><Link to="/security" onClick={toggleMenu}>Security</Link></li>
          <li><Link to="/case-studies" onClick={toggleMenu}>Case Studies</Link></li>
          <li><Link to="/resources" onClick={toggleMenu}>Resources</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
