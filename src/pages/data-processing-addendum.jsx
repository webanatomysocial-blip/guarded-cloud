import React from 'react'
import "../css/Header.css";
import { Link } from "react-router-dom";

const DataProcessingAddendum = () => {
  return (
    <>
      <div className="not-found-container">
        <h2 className='main-big-heading' style={{textAlign:"center"}}>Data Processing Addendum</h2>
        <p className='sub-heading'>
          This Data Processing Addendum (“DPA”) forms part of your agreement with Guarded Cloud.
        </p>

        <div className="policy-content">
          <h3 className="sub-heading-bold">Roles</h3>
         <p className="text-black">You are the Controller and Guarded Cloud is the Processor with respect to personal data.</p>

          <h3 className="sub-heading-bold">Sub-processors</h3>
         <p className="text-black">We may use sub-processors under contract and will provide notice of changes.</p>

          <h3 className="sub-heading-bold">Security Measures</h3>
         <p className="text-black">We maintain technical and organizational safeguards to protect your data.</p>

          <h3 className="sub-heading-bold">Breach Notification</h3>
         <p className="text-black">We will notify you without undue delay upon becoming aware of a data breach.</p>

          <h3 className="sub-heading-bold">International Transfers</h3>
         <p className="text-black">Where applicable, international data transfers will be subject to appropriate safeguards.</p>
        </div>

        
      </div>
    </>
  )
}

export default DataProcessingAddendum;
