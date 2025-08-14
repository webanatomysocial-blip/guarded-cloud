import React from "react";
import { Link } from "react-router-dom";

function ManagedDetectionResponse() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Managed Detection and Response</h1>
      <p>Proactive detection and response to security threats in real-time.</p>
      <p>Explore more services <Link to="/">here</Link>.</p>
    </div>
  );
}

export default ManagedDetectionResponse;