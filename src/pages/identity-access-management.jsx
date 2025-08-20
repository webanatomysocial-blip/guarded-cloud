import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import identityAccess from '../assets/images/services-imgs/identity-access-management-img.jpg';
import TestimonialImg3 from '../assets/images/Testimonial-imgs/Testimonial-img3.jpg';
import ShowCaseImg3 from '../assets/images/services-imgs/ShowCase-img3.jpg';

import {
  FaUserPlus,
  FaClock,
  FaChartLine,
  FaMoneyBillWave,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";

function IdentityAccessManagement() {
  return (
    <>
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Secure identity and access management solutions
          </h2>
          <p className="text">
            Control access to your systems and data with NTT DATA’s identity and access management (IAM) solutions. Our AI-driven tools ensure secure, efficient, and scalable identity management, protecting your organization from unauthorized access while streamlining user experiences. We provide tailored IAM strategies to enhance security and compliance across your digital ecosystem.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src={identityAccess}
              alt="identity access"
            />
          </div>
        </div>
      </section>

      <section className="service-cards-container">
        <h2 className="main-heading">Next-Gen Identity Security</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">Single Sign-On (SSO)</h3>
              <p className="text">
                Simplify user access with secure single sign-on across platforms.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">Real-Time Access Monitoring</h3>
              <p className="text">
                Monitor and manage user access in real-time to prevent unauthorized entry.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Identity Analytics</h3>
              <p className="text">
                Gain insights into user behavior and access patterns with advanced analytics.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Cost-Effective IAM</h3>
              <p className="text">
                Optimize identity management costs with scalable, efficient solutions.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Automated Access Policies</h3>
              <p className="text">
                Automate access controls to ensure compliance and reduce manual errors.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="boxes-heading">User Training Programs</h3>
              <p className="text">
                Educate users on secure access practices to enhance overall security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strength-showcase">
        <div className="strength-left">
          <h2 className="main-heading-White">Showcase your strengths</h2>
          <p className="text-white">
            Our IAM solutions provide secure, user-friendly access management to protect your organization.
          </p>
        </div>

        <div className="strength-middle">
          <div className="testimonial-card">
            <p>⭐ 4.8 (Rating)</p>
            <p>
              The IAM system streamlined our access controls and improved user experience significantly.
            </p>
            <h3>Laura M.</h3>
            <p>Security Analyst, InfoGuard</p>
            <img
              src={TestimonialImg3}
              alt="testimonial"
            />
          </div>
        </div>

        <div className="strength-right">
          <div className="stats-card">
            <h3>AccessTrend</h3>
            <h4>40% faster access management</h4>
            <p>
              Streamlined IAM processes improve efficiency and security.
            </p>
            <img
              src={ShowCaseImg3}
              alt="chart"
            />
          </div>
        </div>
      </section>

      <div className="strength-bottom">
        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3>35,000+</h3>
            </div>
            <ul className="stat-sub">
              <li>Users managed</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3>190M+</h3>
            </div>
            <ul className="stat-sub">
              <li>Access requests processed</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3>4.9</h3>
            </div>
            <ul className="stat-sub">
              <li>Client satisfaction rating</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="service-cta-section">
        <div className="service-cta-content">
          <div className="cta-images">
            <div className="img1"></div>
            <div className="img2"></div>
            <div className="img3"></div>
          </div>
          <div className="cta-contents">
            <h1 className="cta-heading">Ready to Secure Your Identities?</h1>
            <p className="cta-text">
              Enhance security and streamline access with our IAM solutions tailored to your business.
            </p>
          </div>
          <div className="cta-buttons">
            <Link to="/Contact" className="blue-button">
              Get Started
            </Link>
            <Link to="/Contact" className="transparent-button">
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default IdentityAccessManagement;