import React from 'react'
import { Helmet } from 'react-helmet-async';
import "../css/Header.css";
import "../css/industries.css";
import industries from '../assets/images/services-imgs/industries.jpg';
import indsec from '../assets/images/services-imgs/ind-sec.jpg';
import "../css/Services.css";
import { Link } from 'react-router-dom';


const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Secure | Guarded Cloud
        </title>
        <meta
          name="description"
          content="Tailored security outcomes for finance, healthcare, logistics, SaaS, retail, and public sector."
        />

        {/* <meta name="keywords" content="cloudsecure, cybersecurity, services, home" />
        <meta name="robots" content="index, follow" /> */}
        {/* <meta property="og:title" content="Home - CloudSecure" />
        <meta property="og:description" content="Welcome to CloudSecure! Explore our cybersecurity services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com/" /> */}
      </Helmet>

      <section className="industries-container">
        <div className="industries-left">
          <h1 className="main-heading">
            Expertise that fits your world.

          </h1>
          <p className="text">
            Every industry has unique risks and regulations. We tailor controls to your environment—without slowing down the business.


          </p>
        </div>
        <div className="industries-right ">
          <div className="industries-image">
            <img
              src={indsec}
              alt="Industries"
            />
          </div>
        </div>
      </section>


      <section className='industries-section'>
        {/* <h2 className="main-heading">Industries</h2> */}
        <div className="industries-main-container">
          <div className="industries-left-container only-windows">
            <div className="industries-inner-container">
              <img src={industries} alt="industries" />
            </div>
          </div>
          <div className="industries-right-container">
            <div className="ind-section">
              <p className='sub-heading'>Financial Services</p>
              <p className='text'>PCI, SOX, fraud prevention, vendor risk, data loss prevention.</p>
            </div>
            <div className="ind-section">
              <p className='sub-heading'>Healthcare</p>
              <p className='text'>HIPAA safeguards, identity‑first access, audit evidence, ransomware resilience.</p>
            </div>
            <div className="ind-section">
              <p className='sub-heading'>Logistics & Supply Chain</p>
              <p className='text'>Site connectivity, segmentation, IoT/OT isolation, zero‑trust access for partners.</p>
            </div>
            <div className="ind-section">
              <p className='sub-heading'>SaaS/Tech</p>
              <p className='text'>Secure SDLC, cloud‑native guardrails, secrets management, SOC2. </p>
            </div>
            <div className="ind-section">
              <p className='sub-heading'>Retail</p>
              <p className='text'>POS network protection, email & account takeover defense, incident readiness. </p>
            </div>
            <div className="ind-section-last">
              <p className='sub-heading'>Public Sector</p>
              <p className='text'>FedRAMP‑aligned controls, identity governance, auditing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta-section">
        <div className="service-cta-content">
          <div className="cta-flex-container">
            <div className="cta-text">
              <h2 className="cta-heading">Talk to an industry specialist</h2>
              {/* <p className="cta-text-white">Talk to an Engineer</p> */}
            </div>
            <div className="cta-buttons">
              <Link className="blue-button" to="/contact">
                Book your session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Industries
