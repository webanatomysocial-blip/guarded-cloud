import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import manageddetection from '../assets/images/services-imgs/managed-detection-response.jpg';
import  Testimonialimg6 from '../assets/images/Testimonial-imgs/Testimonial-img6.jpg';
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
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Proactive managed detection and response services
          </h2>
          <p className="text">
            Stay ahead of cyber threats with NTT DATA’s managed detection and response (MDR) services. Our AI-powered solutions provide 24/7 monitoring, rapid threat detection, and swift response to minimize risks. With deep industry expertise and advanced analytics, we ensure your organization is protected from sophisticated attacks, allowing you to focus on business growth with confidence.
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

      <section className="service-cards-container">
        <h2 className="main-heading">See Our All Services</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">Threat Hunting</h3>
              <p className="text">
                Proactively identify and neutralize threats before they impact your business.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">24/7 Incident Response</h3>
              <p className="text">
                Respond to incidents instantly with our round-the-clock response team.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Threat Intelligence Analytics</h3>
              <p className="text">
                Leverage advanced analytics to stay informed about emerging threats.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Cost-Effective MDR</h3>
              <p className="text">
                Achieve robust threat detection and response without breaking the budget.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Incident Reporting</h3>
              <p className="text">
                Receive detailed reports on incidents and responses for transparency.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="boxes-heading">Security Awareness Training</h3>
              <p className="text">
                Train your team to recognize and respond to threats effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

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

        <section className="service-cta-section">
              <div className="service-cta-content">
                <div className="cta-flex-container">
                  <div className="cta-text">
                    <h2 className="cta-heading">Ready to Secure Your Cloud?</h2>
                    <p className="cta-text-white">
                      Protect your cloud environment with our advanced security monitoring solutions.
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
            </section>
    </>
  );
}

export default ManagedDetectionResponse;