import React from "react";
import { Link } from "react-router-dom";

function CloudInfrastructureProtection() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Cloud Infrastructure Protection</h1>
      <p>Safeguard your cloud infrastructure with advanced protection solutions.</p>
      <p>Explore more services <Link to="/">here</Link>.</p>
    </div>
  );
}

export default CloudInfrastructureProtection;