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

function CloudInfrastructureProtection() {
  return (
    <>
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Robust protection for your cloud infrastructure
          </h2>
          <p className="text">
            Secure your cloud infrastructure with NTT DATA’s advanced protection solutions. Our AI-driven tools and expertise safeguard your data, applications, and networks from threats while ensuring optimal performance. We provide comprehensive security measures tailored to your cloud environment, enabling seamless operations and peace of mind in a dynamic digital landscape.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="cloud infrastructure"
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
              <h3 className="boxes-heading">Infrastructure Vulnerability Scans</h3>
              <p className="text">
                Identify and address vulnerabilities in your cloud infrastructure with regular scans.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">Real-Time Threat Detection</h3>
              <p className="text">
                Detect and respond to threats instantly with AI-powered monitoring tools.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Performance Optimization</h3>
              <p className="text">
                Enhance infrastructure performance while maintaining robust security measures.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Cost-Efficient Security</h3>
              <p className="text">
                Protect your infrastructure without overspending through optimized security solutions.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Automated Patch Management</h3>
              <p className="text">
                Keep your infrastructure secure with automated updates and patches.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="boxes-heading">Team Security Training</h3>
              <p className="text">
                Equip your team with the knowledge to maintain a secure cloud environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strength-showcase">
        <div className="strength-left">
          <h2 className="main-heading-White">Showcase your strengths</h2>
          <p className="text-white">
            Our cloud infrastructure protection solutions combine advanced technology with simplicity to secure your operations.
          </p>
        </div>

        <div className="strength-middle">
          <div className="testimonial-card">
            <p>⭐ 4.9 (Rating)</p>
            <p>
              The infrastructure protection tools are seamless and highly effective. Our systems are more secure than ever.
            </p>
            <h3>Michael T.</h3>
            <p>Cloud Architect, TechWave</p>
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300"
              alt="testimonial"
            />
          </div>
        </div>

        <div className="strength-right">
          <div className="stats-card">
            <h3>InfraGuard</h3>
            <h4>45% reduction in vulnerabilities</h4>
            <p>
              Our solutions minimize risks and ensure robust cloud infrastructure security.
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
              <h3>40,000+</h3>
            </div>
            <ul className="stat-sub">
              <li>Infrastructures secured</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3>170M+</h3>
            </div>
            <ul className="stat-sub">
              <li>Threats blocked</li>
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
            <h1 className="cta-heading">Ready to Secure Your Cloud Infrastructure?</h1>
            <p className="cta-text">
              Protect your cloud environment with our advanced security solutions tailored to your needs.
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

export default CloudInfrastructureProtection;