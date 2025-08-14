import React from "react";
import { Link } from "react-router-dom";

function AdvisoryManagedSecurity() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Advisory & Managed Security Services</h1>
      <p>Get expert advice and managed security services for your business.</p>
      <p>Explore more services <Link to="/">here</Link>.</p>
    </div>
  );
}

export default AdvisoryManagedSecurity;