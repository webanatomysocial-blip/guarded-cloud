import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import cloudimg from "../assets/images/services-imgs/cloud-security-img.jpg"
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
import { CgTab } from "react-icons/cg";


function CloudSecurityPosture() {
  return (
    <>
      {/* Hero Section */}
      <section className="service-container-1">
        <div className="service-left">
          <h2 className="main-heading">
            Close misconfigurations before attackers find them
          </h2>
          <p className="text">
            <strong>Problem:</strong> Cloud speed creates drift—open storage,
            permissive roles, exposed services. These misconfigurations can
            easily be exploited by attackers if not addressed proactively.
          </p>
        </div>
        <div className="service-right">
          <div className="service-image">
            <img
              src={cloudimg}
              alt="cloud security monitoring"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="service-cards-container">
        <h2 className="main-heading">What We Do</h2>
        <div className="our-service-cards">
          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUserPlus className="service-icon" />
              </div>
              <h3 className="boxes-heading">Baseline & Best Practices</h3>
              <p className="text">
                We baseline against CIS and vendor best practices for Azure,
                AWS, and GCP to ensure your cloud configurations align with
                industry standards from day one.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaClock className="service-icon" />
              </div>
              <h3 className="boxes-heading">Detect Risky Configurations</h3>
              <p className="text">
                Identify risky setups such as public buckets, weak IAM policies,
                lack of encryption, and exposed ports—before they become
                vulnerabilities.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaChartLine className="service-icon" />
              </div>
              <h3 className="boxes-heading">Remediate with Guardrails</h3>
              <p className="text">
                Automate security with guardrails using policy as code,
                blueprints, and secure pipelines to prevent misconfigurations
                from reoccurring.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaMoneyBillWave className="service-icon" />
              </div>
              <h3 className="boxes-heading">Compliance Alignment</h3>
              <p className="text">
                Maintain compliance with continuous monitoring and alignment
                against frameworks like CIS, NIST, and ISO without extra effort.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaFileAlt className="service-icon" />
              </div>
              <h3 className="boxes-heading">Posture Reporting</h3>
              <p className="text">
                Get detailed posture reports highlighting security gaps and
                prioritized recommendations for your cloud environment.
              </p>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceInner">
              <div className="icon">
                <FaUsers className="service-icon" />
              </div>
              <h3 className="boxes-heading">Prioritized Backlog</h3>
              <p className="text">
                Receive a clear backlog of remediation tasks prioritized by risk
                impact, so your team can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section - KEEPING AS IS */}


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
              <h2 className="cta-heading">Request a CSPM Review</h2>
              <p className="cta-text-white">
                Talk to an engineer today and see how we can strengthen your
                cloud posture.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/Contact" className="blue-button-no-hover">
                Get Started
              </Link>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default CloudSecurityPosture;
