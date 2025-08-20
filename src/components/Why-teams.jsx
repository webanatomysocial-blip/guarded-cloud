import React from "react";
import "../css/whyteams.css"; // Import the CSS file for styling

function WhyTeams() {
  return (
    <section className="why-team-section">
      <div className="content-left">
        <h2 className="main-heading">Why teams choose CloudSecure</h2>
        <ul className="text">
          <li><strong>Faster time-to-value</strong> — deploy controls within days, not months.</li>
          <li><strong>Compliance ready</strong> — GDPR, ISO 27001, SOC 2 guidance baked-in.</li>
          <li><strong>24/7 monitoring</strong> — global coverage with expert SOC analysts.</li>
          <li><strong>Clear outcomes</strong> — dashboards and monthly security posture reports.</li>
        </ul>
        <a className="blue-button" href="#contact">Get a Security Assessment</a>
      </div>

      <div className="content-right">
        <div className="why-team-box-grid">
          <div className="why-team-box">
            <p className="text-white">Attack Surface</p>
            <h3 className="boxes-heading-white">Reduced 43%</h3>
            <div className="space-box">
      
             
            </div>
          </div>
          <div className="why-team-box">
            <p className="text-white">Mean Time to Detect</p>
            <h3 className="boxes-heading-white">&lt; 10 min</h3>
            <div className="space-box">

            </div>
          </div>
        </div>
        <div className="why-team-box-grid">
          <div className="why-team-box">
            <p className="text-white">Attack Surface</p>
            <h3 className="boxes-heading-white">Reduced 43%</h3>
            <div className="space-box">

            </div>
          </div>
          <div className="why-team-box">
            <p className="text-white">Mean Time to Detect</p>
            <h3 className="boxes-heading-white">&lt; 10 min</h3>
            <div className="space-box">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTeams;
