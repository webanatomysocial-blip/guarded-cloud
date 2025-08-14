import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <p>Email: support@example.com</p>
      <p>Phone: +1-123-456-7890</p>
      <p>Go back to <Link to="/">Home</Link>.</p>
    </div>
  );
}

export default Contact;