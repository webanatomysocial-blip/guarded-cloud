import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import { FaXTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import whitelogo from '../assets/white-logo.png'

export default function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-social-container">
        <div className="footer-logo">
         <Link to="/"> <img src={whitelogo} alt="Company Logo" /></Link> 
        </div>
        <div className="footer-social">
          <Link to="#" className="social-link"><FaXTwitter /></Link>
          <Link to="#" className="social-link"><FaYoutube /></Link>
          <Link to="#" className="social-link"><FaInstagram /></Link>
          <Link to="#" className="social-link"><FaLinkedin /></Link>
          <Link to="#" className="social-link"><FiMail /></Link>
        </div>
      </div>
      <div className="footer-column">
        <h4>Quick Links</h4>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blogs">Blog</Link>
      </div>
      <div className="footer-column">
        <h4>Services</h4>
        <Link to="/cloud-security-monitoring">Cloud Security Monitoring & Threat Detection</Link>
        <Link to="/cloud-infrastructure-protection">Cloud Infrastructure Protection</Link>
        <Link to="/identity-access-management">Identity & Access Management (IAM)</Link>
        <Link to="/cloud-compliance-governance">Cloud Compliance & Governance</Link>
        <Link to="/advisory-managed-security">Advisory & Managed Security Services</Link>
        <Link to="/managed-detection-response">Managed Detection and Response</Link>
      </div>
    </footer>
    <div className="footer-bottom">
      <p className="text-white">&copy; {new Date().getFullYear()} Your Guardred Cloud. All rights reserved. Designed and developed by <a href="https://webanatomy.in/" target="_blank" rel="noopener noreferrer">Web Anatomy</a></p>
    </div>

  </>
  );
}