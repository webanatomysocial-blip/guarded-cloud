import React from "react";
import "../css/About.css";
import EverythingYouNeed from "../components/EverythingYouNeed"; // Import EverythingYouNeed component
// import Blogs from "../components/Blog";
import aboutbanner from '../assets/images/about-images/About-page-home-banner.jpg';
import missionvision from '../assets/images/about-images/mission-vision-img.jpg';
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Link } from "react-router-dom";

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
  return (
    <>
      <section className="about-banner-container">
        <div className="about-inner-left">
          <h2 className="main-heading">
            Your Trusted Cloud Security Partner
          </h2><br />
          <p className="text">
            At Guarded Cloud, we safeguard your cloud assets from cyber
            threats, ensuring compliance and enabling secure growth.
          </p><br />
          <p className="text">
            We specialize{" "}
            <strong>
              in Cloud Security Monitoring, Threat Detection, Infrastructure
              Protection, IAM, Compliance & Governance
            </strong>
            , and <strong>Managed Detection & Response</strong>. Our solutions
            adapt to startups or established SMBs seamlessly.
          </p><br />
          <p className="text">
            With <strong>24/7 protection</strong>, proactive threat
            intelligence, and expert support, we ensure your business operates
            with confidence.
          </p>
        </div>
        <div className="about-card-img">
          <img
            src={aboutbanner}
            alt="Laptop workspace"
          />
        </div>
      </section>






      {/*     
        <div className="about-services-section">
          <h2 className="main-heading" style={{textAlign: "center"}}>Our Expertise</h2>

<div>


          <div className="about-grid">
            <div className="about-card">
              <div className="icon">
                <FaSearch  className="service-icon" />
              </div>
              <h3 className="boxes-heading">
                Cloud Security Monitoring & Threat Detection
              </h3>
              <p className="about-card-desc">
                24/7 monitoring with advanced threat detection to keep your cloud
                infrastructure secure.
              </p>
            </div>

            
            <div className="about-card">
              <div className="icon">
                <FaCloud  className="service-icon" />
              </div>
              <h3 className="boxes-heading">
                Cloud Infrastructure <br /> Protection 
              </h3>
              <p className="about-card-desc">
                Comprehensive protection for your cloud infrastructure across all
                major platforms.
              </p>
            </div>

            
            <div className="about-card">
              <div className="icon">
                <FaUserShield  className="service-icon" />
              </div>
              <h3 className="boxes-heading">
                Identity & Access <br /> Management (IAM) 
              </h3>
              <p className="about-card-desc">
                Secure access controls and identity management for your cloud
                resources.
              </p>
            </div>


            
      



          </div>





          <div className="about-grid">
                 <div className="about-card">
              <div className="icon">
                <FaRegCheckCircle  className="service-icon" />
              </div>
              <h3 className="boxes-heading">
                Cloud Compliance & Governance
              </h3>
              <p className="about-card-desc">
                Ensure regulatory compliance and maintain governance across your
                cloud environment.
              </p>
            </div>

            
            <div className="about-card">
              <div className="icon">
                <FaShieldAlt  className="service-icon" />
              </div>
              <h3 className="boxes-heading">
                Managed Detection & Response
              </h3>
              <p className="about-card-desc">
                Proactive threat hunting and rapid incident response to minimize
                security risks.
              </p>
            </div>


          </div>
          </div>
        </div> */}



      <EverythingYouNeed marginTop="-50px" Link="/contact" />













      {/* Mission & Vision */}
      <h2 className="main-heading" style={{ textAlign: "center" }}>What Drives Us Forward</h2>
      <div className="about-mission-vision">

        <div className="about-card-our-mission-vision ">
          <div className="icon">
            <FaBullseye className="service-icon" />
          </div>
          <h3 className="boxes-heading ">Our Mission</h3>
          <p className="about-card-desc">
            To deliver world-class cloud security services that protect our
            clients' critical data, maintain compliance, and build lasting
            clients' critical data, maintain compliance, and build lasting
            trust.
          </p>
        </div>





        <div className="inner-about-mission-vision-right">
          <img src={missionvision} alt="Mission and Vision" />

        </div>


        <div className="about-card-our-mission-vision ">
          <div className="icon">
            <FaEye className="service-icon" />
          </div>
          <h3 className="boxes-heading">Our Vision</h3>
          <p className="about-card-desc">
            A world where every organization — regardless of size or location —
            can harness the power of the cloud without compromising security.
            can harness the power of the cloud without compromising security.
          </p>
        </div>


      </div>






      {/* Why Choose Us */}
      <section className="about-why-choose">
        <h2 className="main-heading" style={{ textAlign: "center" }}>Why Choose Us</h2>
        <div className="about-choose-grid">
          <div className="about-choose-item">
            <div className="icon">
              <FaCogs className="service-icon" />
            </div>
            <div>
              <h4 className="boxes-heading">Deep Expertise</h4>
              <p className="about-choose-desc">
                Comprehensive knowledge in public, private, and hybrid cloud
                security across all major platforms.
              </p>
            </div>
          </div>
          <div className="about-choose-item">
            <div className="icon ">
              <FaEye className="service-icon" />
            </div>
            <div>
              <h4 className="boxes-heading">24/7 Monitoring</h4>
              <p className="about-choose-desc">
                Round-the-clock security monitoring with rapid incident response
                to protect your assets.
              </p>
            </div>
          </div>
          <div className="about-choose-item">
            <div className="icon">
              <FaCogs className="service-icon" />
            </div>
            <div>
              <h4 className="boxes-heading">Tailored Solutions</h4>
              <p className="about-choose-desc">
                Customized security solutions designed specifically for SMBs and
                startups of all sizes.
              </p>
            </div>
          </div>
          <div className="about-choose-item">
            <div className="icon">
              <FaGlobe className="service-icon" />
            </div>
            <div>
              <h4 className="boxes-heading">Global Reach</h4>
              <p className="about-choose-desc">
                Worldwide coverage with local understanding to serve businesses
                across all regions.
              </p>
            </div>
          </div>
        </div>
      </section>




      <TestimonialCarousel/>















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
      {/* <Blogs /> */}

    </>
  );
}