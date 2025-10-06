import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import whitelogo from '../assets/white-logo.png'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-logo">
          <Link to="/">
            <img src={whitelogo} alt="Company Logo" />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer-column split-column">
          <h4>Quick Links</h4>
          <div className="column-links">
            <div className="left-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/how-we-work">How We Work</Link>
              <Link to="/pricing">Pricing</Link>
            </div>
            <div className="divider"></div>
            <div className="right-links">
              <Link to="/security">Security</Link>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="footer-column split-column">
          <h4>Solutions</h4>
          <div className="column-links-2">
            <div className="left-links">
              <Link to="/cloud-security-posture">Cloud Security Posture (CSPM)</Link>
              <Link to="/managed-detection-response">Managed Detection and Response (MDR/XDR)</Link>
              <Link to="/zero-trust-identity">Zero Trust & Identity</Link>
              <Link to="/firewall-network-security">Firewall & Network Security</Link>
              <Link to="/email-collaboration-security">Email & Collaboration Security</Link>
            </div>
            <div className="divider"></div>
            <div className="right-links">
              <Link to="/data-protection-dlp">Data Protection & DLP</Link>
              <Link to="/vulnerability-patch-management">Vulnerability & Patch Management</Link>
              <Link to="/backup-disaster-recovery">Backup & Disaster Recovery</Link>
              <Link to="/incident-response-retainer">Incident Response Retainer</Link>
            </div>
          </div>

          <div className="divider"></div>

        </div>
      </footer>
      <div className="footer-middle-section only-windows">
        <div className="footer-middle">
          <Link to="/privacy">Privacy Policy | </Link>
          <Link to="/terms">Terms of Service | </Link>
          <Link to="/cookies">Cookies Policy | </Link>
          <Link to="/dpa">Data Processing | </Link>
        </div>
      </div>
      <div className="footer-middle-section only-mobile">
        <div className="footer-middle ">
          <div className="footer-middle-left">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <div className="footer-middle-right">
            <Link to="/cookies">Cookies Policy</Link>
            <Link to="/dpa">Data Processing</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Your Guarded Cloud. All rights reserved.
          Designed and developed by{" "}
          <Link style={{fontWeight:900}} to="https://webanatomy.in/" target="_blank" rel="noopener noreferrer">
            Web Anatomy
          </Link>
        </p>
      </div>
    </>
  );
}
