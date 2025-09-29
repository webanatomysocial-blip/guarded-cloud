import React from "react";
import "../css/EverythingYouNeed.css";
import { ArrowRight } from "react-bootstrap-icons"; // ArrowRight for the button
import { Search } from "react-bootstrap-icons"; // Monitoring
import { Shield } from "react-bootstrap-icons"; // Protection
import { Key } from "react-bootstrap-icons"; // IAM
import { FileText } from "react-bootstrap-icons"; // Compliance
import { People } from "react-bootstrap-icons"; // Advisory
import { LightningCharge } from "react-bootstrap-icons"; // MDR
import { Link } from "react-router-dom"; 

import { 
  FaCloud, 
  FaShieldAlt, 
  FaUserShield, 
  FaNetworkWired, 
  FaEnvelopeOpenText, 
  FaLock, 
  FaBug, 
  FaDatabase, 
  FaLifeRing 
} from "react-icons/fa"; 
function EverythingYouNeed(props) {
  const services = [
    {
      icon: FaCloud,
      title: "Cloud Security Posture (CSPM)",
      description:
        "Monitor and secure your cloud environments with continuous assessment and automated risk mitigation.",
      route: "/cloud-security-posture",
    },
    {
      icon: FaShieldAlt,
      title: "Managed Detection and Response (MDR/XDR)",
      description:
        "Detect, respond, and remediate threats quickly with our expert-driven 24/7 managed security services.",
      route: "/managed-detection-response",
    },
    {
      icon: FaUserShield,
      title: "Zero Trust & Identity",
      description:
        "Implement identity-driven security to ensure only authorized users access critical resources.",
      route: "/zero-trust-identity",
    },
    // {
    //   icon: FaNetworkWired,
    //   title: "Firewall & Network Security",
    //   description:
    //     "Protect your network perimeter with advanced firewall strategies and network traffic monitoring.",
    //   route: "/firewall-network-security",
    // },
    // {
    //   icon: FaEnvelopeOpenText,
    //   title: "Email & Collaboration Security",
    //   description:
    //     "Safeguard your email and collaboration platforms from phishing, malware, and unauthorized access.",
    //   route: "/email-collaboration-security",
    // },
    // {
    //   icon: FaLock,
    //   title: "Data Protection & DLP",
    //   description:
    //     "Secure sensitive data and prevent leaks with data loss prevention strategies and encryption.",
    //   route: "/data-protection-dlp",
    // },
    // {
    //   icon: FaBug,
    //   title: "Vulnerability & Patch Management",
    //   description:
    //     "Identify, prioritize, and remediate vulnerabilities to reduce your security risk exposure.",
    //   route: "/vulnerability-patch-management",
    // },
    // {
    //   icon: FaDatabase,
    //   title: "Backup & Disaster Recovery",
    //   description:
    //     "Ensure business continuity with reliable backup strategies and rapid disaster recovery solutions.",
    //   route: "/backup-disaster-recovery",
    // },
    // {
    //   icon: FaLifeRing,
    //   title: "Incident Response Retainer",
    //   description:
    //     "Access expert support during security incidents to contain threats and restore normal operations quickly.",
    //   route: "/incident-response-retainer",
    // },
  ];

  return (
    <>
      <section className="everything-you-need-section" style={{ marginTop: props.marginTop }}>
        <div className="everything-you-need-container">
          <h2 className="main-heading" data-reveal>
            Cloud Solutions 
          </h2>
          <p className="sub-heading">
            End‑to‑end protection tailored for fast‑moving teams. Clear outcomes,
            measurable impact.
          </p>
          <div className="cards">
            {services.map((service, index) => (
              <article key={index} className="card" data-reveal>
                <div className="icon" aria-hidden="true">
                  <service.icon className="service-icon" />
                </div>
                <h3 className="boxes-heading">{service.title}</h3>
                <p className="text">{service.description}</p>
                <Link to={service.route} className="read-more">
                  Read More
                </Link>
              </article>
            ))}
          </div>
          <div className="data-reveal" style={{ marginTop: "40px" }} data-reveal>
            <Link className="blue-button-small" to='/solutions'>
              Explore All Solutions <ArrowRight className="arrow-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default EverythingYouNeed;