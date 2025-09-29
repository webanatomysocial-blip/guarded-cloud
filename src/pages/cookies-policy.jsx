import React from 'react'
import "../css/Header.css";
import { Link } from "react-router-dom";

const CookiesPolicy = () => {
  return (
    <>
      <div className="not-found-container">
        <h2 className='main-big-heading'>Cookies Policy</h2>
        <p className='sub-heading'>
          This Cookies Policy explains how Guarded Cloud uses cookies and similar technologies.
        </p>

        <div className="policy-content">
          <h3>Types of Cookies</h3>
          <p>We use essential cookies for site functionality, analytics cookies to improve features, and marketing cookies for personalization.</p>

          <h3>Consent</h3>
          <p>In some regions, non-essential cookies require your opt-in consent. You may change your preferences at any time.</p>

          <h3>Control</h3>
          <p>You can manage cookies through your browser settings, though disabling them may limit site functionality.</p>
        </div>

       
      </div>
    </>
  )
}

export default CookiesPolicy;
