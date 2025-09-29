import React from "react";
import "../css/whyteams.css"; 
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiShield } from "react-icons/gi";
import { BsFileCheck } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

function WhyTeams() {
  return (
    <section className="why-team-section">
      <div className="content-left">
        <h2 className="main-heading">Why teams choose Guarded Cloud</h2>
        <ul className="text">
          <li>
            <strong>See what matters. Unified visibility across identities, endpoints, networks, and cloud resources.</strong> — deploy controls within days, not months.
          </li>
          <li>
            <strong>Compliance ready</strong> — GDPR, ISO 27001, SOC 2 guidance baked-in.
          </li>
          <li>
            <strong>24/7 monitoring</strong> — global coverage with expert SOC analysts.
          </li>
          <li>
            <strong>Clear outcomes</strong> — dashboards and monthly security posture reports.
          </li>
        </ul>
        <Link className="blue-button" to={'/contact'}>
          Get a Security Assessment
        </Link>
      </div>

      <div className="content-right">
        <div className="why-team-box-grid">
          <div className="why-team-box">
            <h3 className="boxes-heading-white">
              <AiOutlineClockCircle className="icon-arrow" /> Dwell Time
            </h3>
            <div className="space-box">
              <p className="text-white">Faster detection and isolation.</p>
            </div>
          </div>
          <div className="why-team-box">
            <h3 className="boxes-heading-white">
              <GiShield className="icon-arrow" /> Attack Surface
            </h3>
            <div className="space-box">
              <p className="text-white">Fewer exposed services & excessive privileges.</p>
            </div>
          </div>
        </div>
        <div className="why-team-box-grid">
          <div className="why-team-box">
            <h3 className="boxes-heading-white">
              <BsFileCheck className="icon-arrow" /> Audit Readiness
            </h3>
            <div className="space-box">
              <p className="text-white">Evidence on demand.</p>
            </div>
          </div>
          <div className="why-team-box">
            <h3 className="boxes-heading-white">
              <FiUsers className="icon-arrow" /> Team Capacity
            </h3>
            <div className="space-box">
              <p className="text-white">We handle the noise so your team ships features.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTeams;
