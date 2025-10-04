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
          <h3 className="sub-heading-bold">Services</h3>
          <p className="text-black">We provide managed security services, monitoring, and compliance support as described on our site.</p>

          <h3 className="sub-heading-bold">Acceptable Use</h3>
          <p className="text-black">You agree not to use our services for illegal activity or abuse, including attempts to compromise systems.</p>

          <h3 className="sub-heading-bold">Confidentiality</h3>
          <p className="text-black">We will protect your data with industry-standard safeguards. You are responsible for protecting your access credentials.</p>

          <h3 className="sub-heading-bold">Liability</h3>
          <p className="text-black">Our liability is limited to fees paid in the prior 12 months (confirm with counsel for exact limits).</p>

          <h3 className="sub-heading-bold">Governing Law</h3>
          <p className="text-black">These Terms are governed by the laws of [Insert jurisdiction].</p>
        </div>

       
      </div>
    </>
  )
}

export default TermsOfService;
