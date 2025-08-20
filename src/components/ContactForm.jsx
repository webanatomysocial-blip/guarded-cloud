import React from "react";
import "../css/Contact.css";

export default function Contactus() {
  return (
    <section className="contact-us-section" id="contact">
      <div className="contact-container">
        <h2>Talk to a Cloud Security Expert</h2>
        <p>
          Fill out the form below or use WhatsApp. We’ll get back within one
          business day.
        </p>
        <form className="contact-form">
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ram"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Work Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                required
              />
            </div>
          </div>
<div className="field-row"> 
          <div className="field">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your Company"
            />
          </div>
          <div className="field">
            <label htmlFor="service">Service of Interest</label>
            <select id="service" name="service">
              <option value="Monitoring & Threat Detection">
                Monitoring & Threat Detection
              </option>
              <option value="Infrastructure Protection">
                Infrastructure Protection
              </option>
              <option value="IAM">Identity & Access Management (IAM)</option>
              <option value="Compliance & Governance">
                Compliance & Governance
              </option>
              <option value="Advisory & Managed">Advisory & Managed</option>
              <option value="MDR">Managed Detection & Response</option>
            </select>
          </div>
          </div>
          <div className="field">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your needs…"
            ></textarea>
          </div>
          <label className="consent">
            <input id="gdpr" type="checkbox" required />
            <span>
              I agree to the{" "}
              <a href="#" style={{ textDecoration: "underline" }}>
                Privacy Policy
              </a>{" "}
              and consent to be contacted for this inquiry. (GDPR)
            </span>
          </label>
          <button className="sub-button" type="submit">
            Submit
          </button>
          <div id="formMsg" className="sm" role="status"></div>
        </form>
      </div>
      <div className="contact-right">
        <h3>Contact</h3>
        <p>Email: abcd@gmail.com</p>
        <p>Global | Remote | 24/7</p>
        <div className="box">
          <div className="content">Content here</div>
        </div>
        <a href="#">What's app</a>
      </div>
    </section>
  );
}
