import React from 'react'
import "../css/Services.css";
import { Link } from "react-router-dom";

const Cta = () => {
    return (
        <>
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
    )
}

export default Cta
