import React from 'react'
import "../css/Header.css";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <>
      <div className="not-found-container">
        <h2 className='main-big-heading'>Terms of Service</h2>
        <p className='sub-heading'>
          These Terms of Service govern your use of Guarded Cloud’s managed security offerings.
        </p>

        <div className="policy-content">
          <h3>Services</h3>
          <p>We provide managed security services, monitoring, and compliance support as described on our site.</p>

          <h3>Acceptable Use</h3>
          <p>You agree not to use our services for illegal activity or abuse, including attempts to compromise systems.</p>

          <h3>Confidentiality</h3>
          <p>We will protect your data with industry-standard safeguards. You are responsible for protecting your access credentials.</p>

          <h3>Liability</h3>
          <p>Our liability is limited to fees paid in the prior 12 months (confirm with counsel for exact limits).</p>

          <h3>Governing Law</h3>
          <p>These Terms are governed by the laws of [Insert jurisdiction].</p>
        </div>

       
      </div>
    </>
  )
}

export default TermsOfService;
