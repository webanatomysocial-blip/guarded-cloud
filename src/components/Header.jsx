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
  const [isMenuClosing, setIsMenuClosing] = useState(false);
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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

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
    if (isMenuOpen) {
      closeMenuWithAnimation();
    } else {
      setIsMenuOpen(true);
    }
  };

  const closeMenuWithAnimation = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
      setIsMobileServicesOpen(false);
    }, 300);
  };

  return (
    <header
      className={`header ${isHeaderWhite ? "white-bg" : "blur-bg"}`}
      ref={headerRef}
    >
      {/* Section: Logo Start */}
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {/* Section: Logo End */}

      {/* Section: Desktop Navigation Start */}
      <nav className="navigation only-windows">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>

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
      {/* Section: Desktop Navigation End */}

      {/* Section: Mobile Hamburger Start */}
      <div className="hamburger only-mobile" onClick={toggleMenu}>
        <FaBars size={24} />
      </div>
      {/* Section: Mobile Hamburger End */}

      {/* Section: Mobile Sidebar Menu Start */}
      <div
        className={`mobile-menu only-mobile ${
          isMenuOpen ? (isMenuClosing ? "closing" : "open") : ""
        }`}
      >
        <div className="mobile-menu-header">
          <FaTimes size={24} className="close-icon" onClick={toggleMenu} />
        </div>
        <ul className="mobile-nav-list">
          <li>
            <Link to="/" onClick={closeMenuWithAnimation}>Home</Link>
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
                  <Link to="/cloud-security-posture" onClick={closeMenuWithAnimation}>
                    Cloud Security Posture (CSPM)
                  </Link>
                </li>
                <li>
                  <FaShieldAlt className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/managed-detection-response" onClick={closeMenuWithAnimation}>
                    Managed Detection and Response (MDR/XDR)
                  </Link>
                </li>
                <li>
                  <FaUserShield className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/zero-trust-identity" onClick={closeMenuWithAnimation}>
                    Zero Trust & Identity
                  </Link>
                </li>
                <li>
                  <FaNetworkWired className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/firewall-network-security" onClick={closeMenuWithAnimation}>
                    Firewall & Network Security
                  </Link>
                </li>
                <li>
                  <FaEnvelopeOpenText className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/email-collaboration-security" onClick={closeMenuWithAnimation}>
                    Email & Collaboration Security
                  </Link>
                </li>
                <li>
                  <FaLock className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/data-protection-dlp" onClick={closeMenuWithAnimation}>
                    Data Protection & DLP
                  </Link>
                </li>
                <li>
                  <FaBug className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/vulnerability-patch-management" onClick={closeMenuWithAnimation}>
                    Vulnerability & Patch Management
                  </Link>
                </li>
                <li>
                  <FaDatabase className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/backup-disaster-recovery" onClick={closeMenuWithAnimation}>
                    Backup & Disaster Recovery
                  </Link>
                </li>
                <li>
                  <FaLifeRing className="mega-icon" style={{ height: "0.7em", width: "1em" }} />
                  <Link to="/incident-response-retainer" onClick={closeMenuWithAnimation}>
                    Incident Response Retainer
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li><Link to="/industries" onClick={closeMenuWithAnimation}>Industries</Link></li>
          <li><Link to="/how-we-work" onClick={closeMenuWithAnimation}>How We Work</Link></li>
          <li><Link to="/pricing" onClick={closeMenuWithAnimation}>Pricing</Link></li>
          <li><Link to="/security" onClick={closeMenuWithAnimation}>Security</Link></li>
          <li><Link to="/case-studies" onClick={closeMenuWithAnimation}>Case Studies</Link></li>
          <li><Link to="/resources" onClick={closeMenuWithAnimation}>Resources</Link></li>
          <li><Link to="/contact" onClick={closeMenuWithAnimation}>Contact</Link></li>
          <li><Link to="/about" onClick={closeMenuWithAnimation}>About</Link></li>
        </ul>
      </div>

      {isMenuOpen && <div className="overlay show" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
