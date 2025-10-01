import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import backupImg from "../assets/images/services-imgs/disaster-recovery.jpg"
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


function BackupDisasterRecovery() {
  return (
    <>
      {/* Hero Section */}
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Outages happen—make them boring.
          </h2>
          <p className="text">
            <strong>Scope:</strong> 3‑2‑1 backups, immutable storage options, tested restore runbooks, RPO/RTO alignment.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src={backupImg}
              alt="backup and disaster recovery"
            />
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="service-cards-container">
        <h2 className="main-heading">Reliable Backup & Disaster Recovery</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">3‑2‑1 Backup Strategy</h3>
              <p className="text">
                Maintain multiple copies across different storage mediums to ensure data resiliency.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">Immutable Storage</h3>
              <p className="text">
                Protect backups from ransomware and accidental deletions with tamper-proof storage options.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Tested Restore Runbooks</h3>
              <p className="text">
                Ensure business continuity with regularly tested recovery procedures and automated workflows.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">RPO & RTO Alignment</h3>
              <p className="text">
                Align backup and recovery objectives with business requirements to minimize downtime and data loss.
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
              <h2 className="cta-heading">Assess your recoverability</h2>
              <p className="cta-text-white">
                Evaluate your backup and disaster recovery readiness with expert guidance.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/Contact" className="blue-button-no-hover">
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BackupDisasterRecovery;
