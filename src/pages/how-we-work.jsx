import React from 'react'
import { Helmet } from 'react-helmet-async';
import "../css/Header.css";
import "../css/howwework.css";
import cloudCompliance from '../assets/images/services-imgs/cloud-compliance-governance-img.jpg';
import FAQTemplate from "../components/Faq";
import { faqs } from "../data/faqs";


const HowWeWork = () => {
  return (
    <>
      <Helmet>
        <title>How We Work | Guarded Cloud
        </title>
        <meta
          name="description"
          content="Our 30/60/90 approach: assess, harden, and monitor—delivering quick wins and sustained improvements."
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

      {/* <section className="howwework-container">
        <div className="howwework-left">
          <h1 className="main-heading">
            Expertise that fits your world.

          </h1>
          <p className="text">
            Every industry has unique risks and regulations. We tailor controls to your environment—without slowing down the business.


          </p>
        </div>
        <div className="howwework-right">
          <div className="howwework-image">
            <img
              src={cloudCompliance}
              alt="howwework"
            />
          </div>
        </div>
      </section> */}


      <section className='howwework-section'>
        <h2 className="main-heading">A 30/60/90 plan that delivers.
        </h2>
        <div className="howwework-main-container">
          <div className="howwework-left-container">
            <div className="howwework-inner-container">
              <img src={cloudCompliance} alt="howwework" />
            </div>
          </div>
          <div className="howwework-right-container">
            <div className="ind-section">
              <p className='sub-heading'>Phase 0: Kickoff (Days 0–3)</p>
              <p className='text'>Stakeholder alignment, access provisioning, data collection plan.
              </p>
            </div>
            <div className="ind-section">
              <p className='sub-heading'>Phase 1: Assess (Days 1–30)</p>
              <p className='text'>- Baseline posture & threat review (cloud, identity, endpoint, network). - Quick wins implemented (critical
                misconfigs, risky exposures). - Deliverable: <bold> Assessment report + prioritized </bold></p>
            </div>
            <div className="ind-section">
              <p className='sub-heading'>Phase 2: Harden (Days 31–60)</p>
              <p className='text'>Implement guardrails (IaC templates, policy packs, identity controls). - Roll out SSL Decryption pilot to IT
group; tune exceptions. - Deliverable: <bold> Hardened baseline + change runbooks</bold></p>
            </div>
            <div className="ind-section">
              <p className='sub-heading'>Phase 3: Monitor & Improve (Days 61–90)</p>
              <p className='text'>MDR playbooks live; tuning to reduce noise. - Executive scorecard (KPIs: MTTR, misconfig count, vuln SLA,
phishing rate). - Deliverable:<bold> Quarterly Security Scorecard & Roadmap</bold></p>
            </div>
            <div className="ind-section-last">
              <p className='text'><bold>Ongoing:</bold> Monthly posture reviews, tabletop exercises, roadmap refresh.</p>
            </div>
           
          </div>
        </div>
      </section>

       <FAQTemplate title="Frequently Asked Questions" faqs={faqs} />
    </>
  )
}

export default HowWeWork
