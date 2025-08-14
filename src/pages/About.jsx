import React from "react";
import "../css/About.css"; // Import your CSS file
import {
  FaShieldAlt,
  FaCloud,
  FaUserShield,
  FaRegCheckCircle,
  FaSearch,
  FaBullseye,
  FaEye,
  FaCogs,
  FaGlobe,
} from "react-icons/fa";

export default function About() {
  const expertiseItems = [
    {
      icon: <FaSearch size={32} className="about-icon" />,
      iconBg: "blue",
      title: "Cloud Security Monitoring & Threat Detection",
      desc: "24/7 monitoring with advanced threat detection to keep your cloud infrastructure secure.",
    },
    {
      icon: <FaCloud size={32} className="about-icon" />,
      iconBg: "purple",
      title: "Cloud Infrastructure Protection",
      desc: "Comprehensive protection for your cloud infrastructure across all major platforms.",
    },
    {
      icon: <FaUserShield size={32} className="about-icon" />,
      iconBg: "green",
      title: "Identity & Access Management (IAM)",
      desc: "Secure access controls and identity management for your cloud resources.",
    },
    {
      icon: <FaRegCheckCircle size={32} className="about-icon" />,
      iconBg: "orange",
      title: "Cloud Compliance & Governance",
      desc: "Ensure regulatory compliance and maintain governance across your cloud environment.",
    },
    {
      icon: <FaShieldAlt size={32} className="about-icon" />,
      iconBg: "red",
      title: "Managed Detection & Response",
      desc: "Proactive threat hunting and rapid incident response to minimize security risks.",
    },
  ];

  const missionVisionItems = [
    {
      icon: <FaBullseye size={32} className="about-icon" />,
      iconBg: "blue",
      title: "Our Mission",
      desc: "To deliver world-class cloud security services that protect our clients' critical data, maintain compliance, and build lasting trust.",
    },
    {
      icon: <FaEye size={32} className="about-icon" />,
      iconBg: "purple",
      title: "Our Vision",
      desc: "A world where every organization — regardless of size or location — can harness the power of the cloud without compromising security.",
    },
  ];

  const chooseItems = [
    {
      icon: <FaCogs size={28} className="about-icon" />,
      iconBg: "blue",
      title: "Deep Expertise",
      desc: "Comprehensive knowledge in public, private, and hybrid cloud security across all major platforms.",
    },
    {
      icon: <FaEye size={28} className="about-icon" />,
      iconBg: "green",
      title: "24/7 Monitoring",
      desc: "Round-the-clock security monitoring with rapid incident response to protect your assets.",
    },
    {
      icon: <FaCogs size={28} className="about-icon" />,
      iconBg: "purple",
      title: "Tailored Solutions",
      desc: "Customized security solutions designed specifically for SMBs and startups of all sizes.",
    },
    {
      icon: <FaGlobe size={28} className="about-icon" />,
      iconBg: "orange",
      title: "Global Reach",
      desc: "Worldwide coverage with local understanding to serve businesses across all regions.",
    },
  ];

  return (
    <div className="page">
      <section>
        <div className="about-container dis">
          <div className="about-card">
            <h2 className="main-heading">
              Your Trusted Cloud Security Partner
            </h2>
            <p className="lead">
              At Guarded Cloud, we safeguard your cloud assets from cyber
              threats, ensuring compliance and enabling secure growth.
            </p>
            <p>
              We specialize{" "}
              <strong>
                in Cloud Security Monitoring, Threat Detection, Infrastructure
                Protection, IAM, Compliance & Governance
              </strong>
              , and <strong>Managed Detection & Response</strong>. Our solutions
              adapt to startups or established SMBs seamlessly.
            </p>
            <p>
              With <strong>24/7 protection</strong>, proactive threat
              intelligence, and expert support, we ensure your business operates
              with confidence.
            </p>
          </div>
          <div className="about-card-img">
            <img
              src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80"
              alt="Laptop workspace"
            />
          </div>
        </div>
      </section>

      <div className="container main-content">
        {/* Expertise Section */}
        <div className="services-section">
          <h2 className="section-title">Our Expertise</h2>
          <div className="grid">
            {expertiseItems.map((item, idx) => (
              <div className="card" key={idx}>
                <div className={`icon ${item.iconBg}`}>{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <h2 className="section-title">What Drives Us Forward</h2>
        <div className="mission-vision">
          {missionVisionItems.map((item, idx) => (
            <div className="card white" key={idx}>
              <div className={`icon ${item.iconBg}`}>{item.icon}</div>
              <h3 className="card-title center">{item.title}</h3>
              <p className="card-desc center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="why-choose">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="choose-grid">
            {chooseItems.map((item, idx) => (
              <div className="choose-item" key={idx}>
                <div className={`choose-icon ${item.iconBg}`}>{item.icon}</div>
                <div>
                  <h4 className="choose-title">{item.title}</h4>
                  <p className="choose-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      
      </div>
    </div>
  );
}
