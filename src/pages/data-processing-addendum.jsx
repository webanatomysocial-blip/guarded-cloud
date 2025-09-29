import React from 'react'
import "../css/Header.css";
import { Link } from "react-router-dom";

const DataProcessingAddendum = () => {
  return (
    <>
      <div className="not-found-container">
        <h2 className='main-big-heading'>Data Processing Addendum</h2>
        <p className='sub-heading'>
          This Data Processing Addendum (“DPA”) forms part of your agreement with Guarded Cloud.
        </p>

        <div className="policy-content">
          <h3>Roles</h3>
          <p>You are the Controller and Guarded Cloud is the Processor with respect to personal data.</p>

          <h3>Sub-processors</h3>
          <p>We may use sub-processors under contract and will provide notice of changes.</p>

          <h3>Security Measures</h3>
          <p>We maintain technical and organizational safeguards to protect your data.</p>

          <h3>Breach Notification</h3>
          <p>We will notify you without undue delay upon becoming aware of a data breach.</p>

          <h3>International Transfers</h3>
          <p>Where applicable, international data transfers will be subject to appropriate safeguards.</p>
        </div>

        
      </div>
    </>
  )
}

export default DataProcessingAddendum;
