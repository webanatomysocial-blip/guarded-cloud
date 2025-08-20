import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import advisorymanaged from '../assets/images/services-imgs/advisory-managed-security-img.jpg';
import ShowcaseImg5 from '../assets/images/services-imgs/Showcase-img5.jpg';
import Testimonialimg5 from '../assets/images/Testimonial-imgs/Testimonial-img5.jpg';

import {
  FaUserPlus,
  FaClock,
  FaChartLine,
  FaMoneyBillWave,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";

function AdvisoryManagedSecurity() {
  return (
    <>
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Strategic cybersecurity advisory and managed services
          </h2>
          <p className="text">
            Elevate your organization's security posture with our expert advisory and managed security services. NTT DATA provides tailored strategies to mitigate risks, ensure compliance, and protect your digital assets. Our industry-leading expertise, combined with advanced AI-driven tools, empowers your business to stay ahead of evolving threats while focusing on innovation and growth. We deliver proactive, scalable solutions to safeguard your operations and enhance resilience.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src={advisorymanaged}
              alt="advisory security"
            />
          </div>
        </div>
      </section>

      <section className="service-cards-container">
        <h2 className="main-heading">Proactive Cybersecurity Advisory</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">Threat Assessment Consulting</h3>
              <p className="text">
                Identify vulnerabilities and risks with comprehensive threat assessments tailored to your business.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">24/7 Security Monitoring</h3>
              <p className="text">
                Real-time monitoring and rapid response to potential threats, ensuring continuous protection.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Risk Analytics Dashboard</h3>
              <p className="text">
                Visualize and manage risks with intuitive dashboards for informed decision-making.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Cost-Optimized Security Plans</h3>
              <p className="text">
                Develop cost-effective security strategies without compromising protection.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Compliance Advisory</h3>
              <p className="text">
                Stay compliant with industry regulations through expert guidance and audits.
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
                Empower your team with training to recognize and respond to cyber threats effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strength-showcase">
        <div className="strength-left">
          <h2 className="main-heading-White">Showcase your strengths</h2>
          <p className="text-white">
            Our advisory and managed security services combine cutting-edge technology with expert insights to protect your business and drive confidence.
          </p>
        </div>

        <div className="strength-middle">
          <div className="testimonial-card">
            <p>⭐ 4.8 (Rating)</p>
            <p>
              The advisory team helped us identify critical gaps and implement robust solutions quickly. Highly professional!
            </p>
            <h3>James R.</h3>
            <p>IT Manager, SecureNet</p>
            <img
              src={Testimonialimg5}
              alt="testimonial"
            />
          </div>
        </div>

        <div className="strength-right">
          <div className="stats-card">
            <h3>SecureTrend</h3>
            <h4>35% reduction in security incidents</h4>
            <p>
              Our proactive approach minimizes risks and ensures uninterrupted operations.
            </p>
            <img
              src={ShowcaseImg5}
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
              <h3>25,000+</h3>
            </div>
            <ul className="stat-sub">
              <li>Businesses protected</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3>150M+</h3>
            </div>
            <ul className="stat-sub">
              <li>Threats mitigated</li>
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
            <h1 className="cta-heading">Ready to Strengthen Your Security?</h1>
            <p className="cta-text">
              Protect your business with expert advisory and managed security solutions tailored to your needs.
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

export default AdvisoryManagedSecurity;