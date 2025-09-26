import React from "react";
import "../css/Contact.css";

export default function Contactus() {
  return (
    <section className="contact-us-section" id="contact">
      <div className="contact-container">
        <h2 className="main-heading">Talk to us
        </h2>
        <p>
          Tell us where you’re headed and what keeps you up at night. We’ll reply within one business
          day
        </p>
        <form className="contact-form">
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
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
                required
              />
            </div>
            <div className="field">
              <label htmlFor="role">Role</label>
              <input
                id="role"
                name="role"
                type="text"
                placeholder="Your Role"
                required
              />
            </div>
            </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="field">
              <label htmlFor="service">What do you need help with?</label>
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
            <label htmlFor="message">Message</label>
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
              processing of my data as described in the {" "}
              <a href="#" style={{ textDecoration: "underline" }}>
                Privacy Policy
              </a>
            </span>
          </label>
          <button className="sub-button" type="submit">
            Send Message
          </button>
          <div id="formMsg" className="sm" role="status"></div>
        </form>
      </div>
      <div className="contact-right">
        <h2 className="main-heading-White">Contact</h2>
        <p href="mailto:info@guardedcloud.com">Email: info@guardedcloud.com</p>
        <p href="mailto:info@guardedcloud.com">Address: coming soon</p>
        <p>Global | Remote | 24/7</p>
        <div className="box only-windows">
          <div className="content">Content here</div>
        </div>
        <a href="#">What's app</a>
      </div>
    </section>
  );
}
