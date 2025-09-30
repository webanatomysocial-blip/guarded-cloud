import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import zeroImg from "../assets/images/services-imgs/zero-trust-security.jpg"
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


function ZeroTtrustIdentity() {
  return (
    <>
      {/* Hero Section */}
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Make identity your new perimeter
          </h2>
          <p className="text">
            <strong>Scope:</strong> MFA everywhere, least privilege, conditional access, device trust, privileged access workflows.
          </p>
          <p className="text">
            <strong>Deliverables:</strong> Access policies, role design, break‑glass accounts, admin tiering, identity threat detection rules.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src={zeroImg}
              alt="zero trust identity"
            />
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="service-cards-container">
        <h2 className="main-heading">Zero Trust Identity Features</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">MFA Everywhere</h3>
              <p className="text">
                Enforce multi-factor authentication for all users and devices.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">Least Privilege Access</h3>
              <p className="text">
                Limit access to only what is necessary to reduce attack surface.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Conditional Access</h3>
              <p className="text">
                Apply context-aware policies to ensure secure and adaptive access.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Device Trust</h3>
              <p className="text">
                Verify device compliance before granting access to critical resources.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Privileged Access Workflows</h3>
              <p className="text">
                Manage, monitor, and secure privileged accounts with controlled workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase & Strength-Bottom Sections (LEFT UNTOUCHED) */}
      <section className="strength-showcase">
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
      </div>

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="service-cta-content">
          <div className="cta-flex-container">
            <div className="cta-text">
              <h2 className="cta-heading">Start your Zero Trust rollout</h2>
              <p className="cta-text-white">
                Begin implementing Zero Trust Identity controls to secure your organization today.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/Contact" className="blue-button-no-hover">
                Request Zero Trust Review
              </Link>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default ZeroTtrustIdentity;
