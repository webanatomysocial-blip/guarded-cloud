import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLock, FaUserShield, FaNetworkWired, FaDatabase, FaEye, FaClipboardCheck, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "../css/Header.css";
import "../css/security.css";
import "../css/Services.css";

const SecurityCompliance = () => {
  const features = [
    {
      icon: <FaLock />,
      title: "Encryption",
      description: "Data in transit (TLS 1.2+) and at rest; key rotation; secrets management."
    },
    {
      icon: <FaUserShield />,
      title: "Access Control",
      description: "MFA, least privilege, role design, privileged access workflows, just‑in‑time access."
    },
    {
      icon: <FaNetworkWired />,
      title: "Network Security",
      description: "Next‑gen firewall best practice, segmentation, SSL decryption, threat prevention."
    },
    {
      icon: <FaDatabase />,
      title: "Backup & DR",
      description: "Immutable options, tested restores, documented RPO/RTO."
    },
    {
      icon: <FaEye />,
      title: "Monitoring & Logging",
      description: "Centralized telemetry, detections mapped to MITRE ATT&CK, alerting & response."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Compliance Mapping",
      description: "SOC2, ISO 27001, HIPAA, GDPR, PCI—control mapping and evidence packs."
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Incident Response",
      description: "On‑call escalation, containment playbooks, post‑incident reviews."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Security & Compliance | Guarded Cloud</title>
        <meta
          name="description"
          content="Encryption, access control, network security, backup/DR, and compliance mapping you can trust."
        />
      </Helmet>

      <section className='security-main'>
        <div className="security-container">
          <div className="security-left-container">
            <h2 className='main-heading-white'>Built on security fundamentals</h2>
            <Link to="/contact" className="transparent-button-small">
              Get Started
            </Link>
          </div>

          <div className="security-right-container">
            {features.map((feature, index) => (
              <div className="section-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section">
        <div className="service-cta-content">
          <div className="cta-flex-container">
            <div className="cta-text">
              <h2 className="cta-heading">Talk to an industry specialist</h2>
              {/* <p className="cta-text-white">Talk to an Engineer</p> */}
            </div>
            <div className="cta-buttons">
              <Link className="blue-button" to="/contact">
                Book your session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecurityCompliance;