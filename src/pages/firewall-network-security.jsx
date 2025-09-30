import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import firewall from "../assets/images/services-imgs/firewall-sec.jpg"
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


function FirewallNetworkSecurity() {
  return (
    <>
      {/* Hero Section */}
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Clean policy. Strong segmentation. Encrypted traffic in control.
          </h2>
          <p className="text">
            <strong>What we deliver:</strong> Rule review & cleanup, app‑ID adoption, URL filtering, threat prevention. SSL Decryption program (phase by phase—pilot with IT, then expand). Site‑to‑site and remote access VPN, GlobalProtect hardening. DMZ & IoT segmentation, secure outbound policies, content inspection.
          </p>
          <p className="text">
            <strong>Artifacts:</strong> As‑built diagrams, rule justification sheets, change runbooks, rollback plans.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src={firewall}
              alt="firewall & network security"
            />
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="service-cards-container">
        <h2 className="main-heading">Firewall & Network Security Features</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">Rule Review & Cleanup</h3>
              <p className="text">
                Optimize firewall rules and remove redundant or risky entries.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">App-ID & URL Filtering</h3>
              <p className="text">
                Control application usage and web traffic with precision.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">SSL Decryption Program</h3>
              <p className="text">
                Phase-by-phase decryption to inspect encrypted traffic securely.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">VPN & GlobalProtect Hardening</h3>
              <p className="text">
                Secure remote and site-to-site connections with best practices.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Segmentation & Secure Policies</h3>
              <p className="text">
                Implement DMZ, IoT segmentation, and secure outbound policies.
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
              <h2 className="cta-heading">Request a firewall health check</h2>
              <p className="cta-text-white">
                Ensure your firewall and network policies are optimized and secure.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/Contact" className="blue-button-no-hover">
                Request Firewall Review
              </Link>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FirewallNetworkSecurity;
