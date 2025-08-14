import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import CloudSecurityMonitoring from "../src/pages/cloud-security-monitoring";
import CloudInfrastructureProtection from "../src/pages/cloud-infrastructure-protection";
import IdentityAccessManagement from "../src/pages/identity-access-management";
import CloudComplianceGovernance from "../src/pages/cloud-compliance-governance";
import AdvisoryManagedSecurity from "../src/pages/advisory-managed-security";
import ManagedDetectionResponse from "../src/pages/managed-detection-response";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cloud-security-monitoring" element={<CloudSecurityMonitoring />} />
        <Route path="/cloud-infrastructure-protection" element={<CloudInfrastructureProtection />} />
        <Route path="/identity-access-management" element={<IdentityAccessManagement />} />
        <Route path="/cloud-compliance-governance" element={<CloudComplianceGovernance />} />
        <Route path="/advisory-managed-security" element={<AdvisoryManagedSecurity />} />
        <Route path="/managed-detection-response" element={<ManagedDetectionResponse />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);