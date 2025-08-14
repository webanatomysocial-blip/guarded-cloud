import React from "react";
import { Link } from "react-router-dom";

function CloudComplianceGovernance() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Cloud Compliance & Governance</h1>
      <p>Ensure compliance and governance for your cloud environments.</p>
      <p>Explore more services <Link to="/">here</Link>.</p>
    </div>
  );
}

export default CloudComplianceGovernance;