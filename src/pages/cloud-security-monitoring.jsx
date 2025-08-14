import React from "react";
import { Link } from "react-router-dom";

function CloudSecurityMonitoring() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Cloud Security Monitoring & Threat Detection</h1>
      <p>Protect your cloud infrastructure with real-time monitoring and threat detection.</p>
      <p>Explore more services <Link to="/">here</Link>.</p>
    </div>
  );
}

export default CloudSecurityMonitoring;