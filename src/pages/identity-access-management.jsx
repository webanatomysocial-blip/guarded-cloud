import React from "react";
import { Link } from "react-router-dom";

function IdentityAccessManagement() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Identity & Access Management (IAM)</h1>
      <p>Manage user identities and access with secure IAM solutions.</p>
      <p>Explore more services <Link to="/">here</Link>.</p>
    </div>
  );
}

export default IdentityAccessManagement;