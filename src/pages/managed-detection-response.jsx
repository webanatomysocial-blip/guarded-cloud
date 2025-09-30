import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import manageddetection from '../assets/images/services-imgs/managed-detection-response.jpg';
import Testimonialimg6 from '../assets/images/Testimonial-imgs/Testimonial-img6.jpg';
import Showcaseimg6 from '../assets/images/services-imgs/Showcase-img6.jpg';
import {
  FaUserPlus,
  FaClock,
  FaChartLine,
  FaMoneyBillWave,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";


function ManagedDetectionResponse() {
  return (
    <>
      {/* Hero Section */}
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            24/7 detection with real containment
          </h2>
          <p className="text">
            <strong>What’s included:</strong> Log & telemetry onboarding
            (cloud, identity, endpoint, firewall), playbooks that auto-contain
            (isolate host, disable account, block IOC), and human analysts to
            validate and accelerate response. Executive and technical reporting
            is also provided.
          </p>
          <p className="text">
            <strong>Outcomes:</strong> Lower dwell time, fewer false positives,
            and faster recoveries.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src={manageddetection}
              alt="managed detection"
            />
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="service-cards-container">
        <h2 className="main-heading">MDR/XDR Services</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">Log & Telemetry Onboarding</h3>
              <p className="text">
                Connect your cloud, identity, endpoint, and firewall logs for
                comprehensive monitoring.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">Automated Playbooks</h3>
              <p className="text">
                Playbooks automatically isolate hosts, disable accounts, and
                block IOCs to contain threats immediately.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Human Analyst Validation</h3>
              <p className="text">
                Analysts validate alerts, accelerate response, and reduce false
                positives for accurate remediation.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Executive & Technical Reporting</h3>
              <p className="text">
                Gain insights through detailed reporting for both executive and
                technical stakeholders.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Lower Dwell Time</h3>
              <p className="text">
                Minimize the time threats remain undetected, improving overall
                security posture.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="boxes-heading">Faster Recovery</h3>
              <p className="text">
                Reduce downtime and quickly restore operations after an incident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase & Strength-Bottom Sections */}
      {/* LEFT UNTOUCHED as per your request */}
      <section className="strength-showcase">
        <div className="strength-left">
          <h2 className="main-heading-White">Showcase your strengths</h2>
          <p className="text-white">
            Our MDR services provide proactive protection and rapid response to keep your business secure.
          </p>
        </div>

        <div className="strength-middle">
          <div className="testimonial-card">
            <p>⭐ 4.9 (Rating)</p>
            <p>
              The MDR team responded to a potential breach in minutes, saving us from major downtime.
            </p>
            <h3>David K.</h3>
            <p>CISO, CyberShield</p>
            <img
              src={Testimonialimg6}
              alt="testimonial"
            />
          </div>
        </div>

        <div className="strength-right">
          <div className="stats-card">
            <h3>ThreatGuard</h3>
            <h4>60% faster incident response</h4>
            <p>
              Our MDR services minimize damage with rapid detection and response.
            </p>
            <img
              src={Showcaseimg6}
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
              <h3>50,000+</h3>
            </div>
            <ul className="stat-sub">
              <li>Incidents resolved</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3>200M+</h3>
            </div>
            <ul className="stat-sub">
              <li>Threats detected</li>
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
              <h2 className="cta-heading">See how MDR works</h2>
              <p className="cta-text-white">
                Discover how our managed detection and response services protect your organization 24/7.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/Contact" className="blue-button-no-hover">
                Request MDR Review
              </Link>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default ManagedDetectionResponse;
