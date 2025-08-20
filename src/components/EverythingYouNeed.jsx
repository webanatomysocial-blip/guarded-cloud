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

function EverythingYouNeed(props) {
  const services = [
    {
      icon: Search,
      title: "Cloud Security Monitoring & Threat Detection",
      description:
        "24/7 monitoring with real‑time alerts and incident triage to minimize risk and dwell time.",
      route: "/cloud-security-monitoring", // Map to the route in main.jsx
    },
    {
      icon: Shield,
      title: "Cloud Infrastructure Protection",
      description:
        "Hardening and guardrails for workloads, containers, and networks across public clouds.",
      route: "/cloud-infrastructure-protection",
    },
    {
      icon: Key,
      title: "Identity & Access Management (IAM)",
      description:
        "Least‑privilege access, SSO, and credential lifecycle to stop lateral movement.",
      route: "/identity-access-management",
    },
    {
      icon: FileText,
      title: "Compliance & Governance",
      description:
        "Framework alignment (ISO 27001, SOC 2, GDPR) with automated evidence collection.",
      route: "/cloud-compliance-governance",
    },
    {
      icon: People,
      title: "Advisory & Managed Security",
      description:
        "Security strategy, architecture reviews, and ongoing managed services for your team.",
      route: "/advisory-managed-security",
    },
    {
      icon: LightningCharge,
      title: "Managed Detection & Response (MDR)",
      description:
        "Detect, investigate, and contain threats fast with expert analysts on call.",
      route: "/managed-detection-response",
    },
  ];

  return (
    <>
      <section className="everything-you-need-section" style={{ marginTop: props.marginTop }}>
        <div className="everything-you-need-container">
          <h2 className="main-heading" data-reveal>
            Cloud Security Services
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
          <div style={{ marginTop: "40px" }} data-reveal>
            <Link className="blue-button" to={props.Link}>
              Speak to an Expert <ArrowRight className="arrow-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default EverythingYouNeed;