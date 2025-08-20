import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import {
  FaUserPlus,
  FaClock,
  FaChartLine,
  FaMoneyBillWave,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";

function CloudSecurityMonitoring() {
  return (
    <>
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Comprehensive cloud security monitoring solutions
          </h2>
          <p className="text">
            Protect your cloud environment with NTT DATA’s advanced cloud security monitoring services. Our AI-powered tools provide real-time threat detection, continuous monitoring, and actionable insights to safeguard your data and applications. With deep industry expertise and scalable solutions, we help you mitigate risks, ensure compliance, and maintain operational resilience in a dynamic digital landscape.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1667372283587-e1557c08aca4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="cloud security monitoring"
            />
          </div>
        </div>
      </section>

      <section className="service-cards-container">
        <h2 className="main-heading">See Our All Services</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">Proactive Threat Detection</h3>
              <p className="text">
                Identify and neutralize threats in real-time with advanced AI-driven monitoring.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">24/7 Security Operations</h3>
              <p className="text">
                Ensure continuous protection with round-the-clock monitoring and response.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Security Analytics Dashboard</h3>
              <p className="text">
                Gain actionable insights with real-time analytics and customizable dashboards.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Cost-Optimized Monitoring</h3>
              <p className="text">
                Achieve robust security monitoring without exceeding your budget.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Compliance Reporting</h3>
              <p className="text">
                Generate detailed compliance reports to meet regulatory requirements effortlessly.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="boxes-heading">Security Training Programs</h3>
              <p className="text">
                Empower your team with training to enhance cloud security awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300"
              alt="testimonial"
            />
          </div>
        </div>

        <div className="strength-right">
          <div className="stats-card">
            <h3>SecureCloud</h3>
            <h4>55% reduction in security incidents</h4>
            <p>
              Our proactive monitoring minimizes risks and ensures uninterrupted operations.
            </p>
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300"
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

      <div className="service-cta-section">
        <div className="service-cta-content">
          <div className="cta-images">
            <div className="img1"></div>
            <div className="img2"></div>
            <div className="img3"></div>
          </div>
          <div className="cta-contents">
            <h1 className="cta-heading">Ready to Secure Your Cloud?</h1>
            <p className="cta-text">
              Protect your cloud environment with our advanced security monitoring solutions.
            </p>
          </div>
          <div className="cta-buttons">
            <a href="#" className="blue-button">
              Get Started
            </a>
            <a href="#" className="transparent-button">
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CloudSecurityMonitoring;