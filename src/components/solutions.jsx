import React from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";
import cloudimg from "../assets/images/services-imgs/cloud-security-img.jpg";
import testimonialImg from '../assets/images/Testimonial-imgs/Testimonial-img1.jpg';
import Showcaseimg1 from '../assets/images/services-imgs/Showcase-img1.jpg';
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
import Cta from "../components/Cta";
import { Helmet } from 'react-helmet-async';

function Solutions() {
    return (
        <>
            <Helmet>
                <title>Solutions | Guarded Cloud</title>
                <meta
                    name="description"
                    content="From CSPM and MDR/XDR to Zero Trust and firewall management, Guarded Cloud delivers end‑to‑end protection for modern businesses."
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <section className="service-container-1">
                <div className="service-left">
                    <h2 className="main-heading">
                        Solutions that reduce risk—fast.
                    </h2>
                    <p className="text">
                        Whether you’re hardening a single cloud, rolling out Zero Trust, or maturing SOC capabilities, we meet you where you are and deliver measurable outcomes.
                    </p>
                </div>
                <div className="service-right">
                    <div className="service-image">
                        <img src={cloudimg} alt="cloud security monitoring" />
                    </div>
                </div>
            </section>

            {/* Solutions Cards */}
            <section className="service-cards-container">
                <h2 className="main-heading">Our Security Solutions</h2>
                <div className="our-service-cards">

                        <div className="serviceCard">
                            <div className="serviceInner">
                                <div className="icon"><FaCloud className="service-icon" /></div>
                                <h3 className="boxes-heading">Cloud Security Posture (CSPM)</h3>
                                <p className="text">Monitor and secure your cloud environments with continuous assessment and automated risk mitigation.</p>
                    <Link to="/cloud-security-posture" className="blue-button-small">
                            Request a CSPM review
                    </Link>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceInner">
                                <div className="icon"><FaShieldAlt className="service-icon" /></div>
                                <h3 className="boxes-heading">Managed Detection and Response (MDR/XDR)</h3>
                                <p className="text">Detect, respond, and remediate threats quickly with our expert-driven 24/7 managed security services.</p>
                    <Link to="/managed-detection-response" className="blue-button-small">
                    See how MDR works
                    </Link>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceInner">
                                <div className="icon"><FaUserShield className="service-icon" /></div>
                                <h3 className="boxes-heading">Zero Trust & Identity</h3>
                                <p className="text">Implement identity-driven security to ensure only authorized users access critical resources.</p>
                    <Link to="/zero-trust-identity" className="blue-button-small">
                    Start your Zero Trust rollout
                    </Link>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceInner">
                                <div className="icon"><FaNetworkWired className="service-icon" /></div>
                                <h3 className="boxes-heading">Firewall & Network Security</h3>
                                <p className="text">Protect your network perimeter with advanced firewall strategies and network traffic monitoring.</p>
                    <Link to="/firewall-network-security" className="blue-button-small">
                    Request a firewall health check
                    </Link>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceInner">
                                <div className="icon"><FaEnvelopeOpenText className="service-icon" /></div>
                                <h3 className="boxes-heading">Email & Collaboration Security</h3>
                                <p className="text">Safeguard your email and collaboration platforms from phishing, malware, and unauthorized access.</p>
                    <Link to="/email-collaboration-security" className="blue-button-small">
                     Evaluate your email risk
                    </Link>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceInner">
                                <div className="icon"><FaLock className="service-icon" /></div>
                                <h3 className="boxes-heading">Data Protection & DLP</h3>
                                <p className="text">Secure sensitive data and prevent leaks with data loss prevention strategies and encryption.</p>
                    <Link to="/data-protection-dlp" className="blue-button-small">
                    Design your DLP policy
                    </Link>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceInner">
                                <div className="icon"><FaBug className="service-icon" /></div>
                                <h3 className="boxes-heading">Vulnerability & Patch Management</h3>
                                <p className="text">Identify, prioritize, and remediate vulnerabilities to reduce your security risk exposure.</p>
                    <Link to="/vulnerability-patch-management" className="blue-button-small">
                    Get a vuln program review
                    </Link>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceInner">
                                <div className="icon"><FaDatabase className="service-icon" /></div>
                                <h3 className="boxes-heading">Backup & Disaster Recovery</h3>
                                <p className="text">Ensure business continuity with reliable backup strategies and rapid disaster recovery solutions.</p>
                    <Link to="/backup-disaster-recovery" className="blue-button-small">
               Assess your recoverability
                    </Link>
                            </div>
                        </div>

                        <div className="serviceCard">
                            <div className="serviceInner">
                                <div className="icon"><FaLifeRing className="service-icon" /></div>
                                <h3 className="boxes-heading">Incident Response Retainer</h3>
                                <p className="text">Access expert support during security incidents to contain threats and restore normal operations quickly.</p>
                    <Link to="/incident-response-retainer" className="blue-button-small">
                  Reserve an IR retainer
 
                    </Link>
                            </div>
                        </div>

                </div>
            </section>

            
            <Cta />
        </>
    );
}

export default Solutions;
