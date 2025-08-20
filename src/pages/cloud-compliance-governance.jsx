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

function CloudComplianceGovernance() {
  return (
    <>
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Ensure compliance and governance in the cloud
          </h2>
          <p className="text">
            Navigate the complex landscape of cloud compliance with NTT DATA’s governance solutions. Our AI-powered tools and expert guidance ensure your organization meets regulatory standards while optimizing cloud operations. From data privacy to industry-specific regulations, we provide end-to-end compliance management to minimize risks and enhance trust, enabling your business to focus on innovation.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="cloud compliance"
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
              <h3 className="boxes-heading">Regulatory Compliance Audits</h3>
              <p className="text">
                Conduct thorough audits to ensure adherence to GDPR, HIPAA, and other regulations.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">Real-Time Compliance Monitoring</h3>
              <p className="text">
                Track compliance status in real-time to address issues proactively.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Compliance Analytics</h3>
              <p className="text">
                Gain insights into compliance performance with detailed analytics and reporting.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Cost-Effective Compliance</h3>
              <p className="text">
                Optimize compliance processes to reduce costs while maintaining standards.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Policy Automation</h3>
              <p className="text">
                Automate policy updates and ensure seamless distribution across teams.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="boxes-heading">Compliance Training</h3>
              <p className="text">
                Educate your team on compliance requirements with tailored training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strength-showcase">
        <div className="strength-left">
          <h2 className="main-heading-White">Showcase your strengths</h2>
          <p className="text-white">
            Our cloud compliance and governance solutions simplify regulatory challenges, ensuring your business stays compliant and secure.
          </p>
        </div>

        <div className="strength-middle">
          <div className="testimonial-card">
            <p>⭐ 4.7 (Rating)</p>
            <p>
              The compliance tools made it easy to stay on top of regulations without overwhelming our team.
            </p>
            <h3>Sarah L.</h3>
            <p>Compliance Officer, DataSafe</p>
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300"
              alt="testimonial"
            />
          </div>
        </div>

        <div className="strength-right">
          <div className="stats-card">
            <h3>ComplyTrend</h3>
            <h4>50% faster compliance audits</h4>
            <p>
              Streamlined processes reduce audit times and improve accuracy.
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
              <h3>30,000+</h3>
            </div>
            <ul className="stat-sub">
              <li>Compliance checks completed</li>
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
              <li>Regulated data points secured</li>
            </ul>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-box">
            <div className="stat-topline">
              <span className="dot"></span>
              <h3>4.8</h3>
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
            <h1 className="cta-heading">Ready to Master Cloud Compliance?</h1>
            <p className="cta-text">
              Simplify your compliance journey with our governance solutions tailored to your business.
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

export default CloudComplianceGovernance;