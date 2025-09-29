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
                            <h2 className="cta-heading">Book a FREE Security Assessment</h2>
                            <p className="cta-text-white">
                                Talk to an Engineer
                            </p>
                        </div>
                        <div className="cta-buttons">
                            <Link to="/Contact" className="blue-button">
                                Get Started
                            </Link>
                            {/* <Link to="/Contact" className="transparent-button">
                                Watch Demo
                            </Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta
