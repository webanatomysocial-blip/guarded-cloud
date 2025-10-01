import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import retainer from "../assets/images/services-imgs/retainer.jpg"
import testimonialImg from '../assets/images/Testimonial-imgs/Testimonial-img1.jpg'
import Showcaseimg1 from '../assets/images/services-imgs/Showcase-img1.jpg'
import {
  FaUserPlus,
  FaClock,
  FaChartLine,
  FaMoneyBillWave,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";


function IncidentResponseRetainer() {
  return (
    <>
      {/* Hero Section */}
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            When seconds matter, be ready.
          </h2>
          <p className="text">
            <strong>Offer:</strong> Pre‑negotiated IR hours, escalation paths, tabletop exercises, forensics toolkit readiness.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src={retainer}
              alt="incident response retainer"
            />
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="service-cards-container">
        <h2 className="main-heading">Incident Response Retainer Services</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">Pre‑Negotiated IR Hours</h3>
              <p className="text">
                Ensure immediate response with pre‑booked incident response hours when critical events occur.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">Escalation Paths</h3>
              <p className="text">
                Access a clear chain of escalation to ensure timely and effective resolution of security incidents.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Tabletop Exercises</h3>
              <p className="text">
                Prepare your team with realistic simulation exercises to test incident response readiness.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Forensics Toolkit Readiness</h3>
              <p className="text">
                Maintain a fully equipped toolkit to quickly investigate and contain security breaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase & Strength-Bottom Sections (LEFT UNTOUCHED) */}
      {/* <section className="strength-showcase">
        <div className="strength-left">
          <h2 className="main-heading-White">Showcase your strengths</h2>
          <p className="text-white">
            Our cloud security monitoring solutions combine cutting-edge technology with expert support to keep your business secure and compliant.
          </p>
        </div>

        <div className="strength-middle">
          <div className="testimonial-card">
            <p>⭐ 4.9 (Rating)</p>
            <p>
              The monitoring tools provided real-time insights that helped us prevent a major security breach.
            </p>
            <h3>Emily W.</h3>
            <p>Security Manager, CloudSafe</p>
            <img
              src={testimonialImg}
              alt="testimonial"
            />
          </div>
        </div>

        <div className="strength-right">
          <div className="stats-card">
            <h3>Guarded Cloud</h3>
            <h4>55% reduction in security incidents</h4>
            <p>
              Our proactive monitoring minimizes risks and ensures uninterrupted operations.
            </p>
            <img
              src={Showcaseimg1}
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
              <h3>45,000+</h3>
            </div>
            <ul className="stat-sub">
              <li>Cloud environments monitored</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3>180M+</h3>
            </div>
            <ul className="stat-sub">
              <li>Threats detected and mitigated</li>
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
      </div> */}

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="service-cta-content">
          <div className="cta-flex-container">
            <div className="cta-text">
              <h2 className="cta-heading">Reserve an IR retainer</h2>
              <p className="cta-text-white">
                Secure expert incident response support before the unexpected happens.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/Contact" className="blue-button-no-hover">
                Reserve Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IncidentResponseRetainer;
