import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "../src/components/Blog";
import BlogPage from "./pages/BlogPage";
import "./css/Header.css";
import Lenis from "@studio-freight/lenis";
import ErrorBoundary from "./components/ErrorBoundary";
import CloudSecurityMonitoring from "./pages/cloud-security-monitoring";
import CloudInfrastructureProtection from "./pages/cloud-infrastructure-protection";
import IdentityAccessManagement from "./pages/identity-access-management";
import CloudComplianceGovernance from "./pages/cloud-compliance-governance";
import AdvisoryManagedSecurity from "./pages/advisory-managed-security";
import ManagedDetectionResponse from "./pages/managed-detection-response";
import ScrollToTop from "./components/ScrollToTop"; // Import the new component

console.log("Main.jsx loaded");

// Initialize Lenis globally
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});
window.lenis = lenis;
console.log("Lenis initialized:", lenis);

// Animation frame loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Cleanup on page unload
window.addEventListener("unload", () => lenis.destroy());

// Event delegation for smooth anchor scrolling
document.addEventListener("click", (e) => {
  const anchor = e.target.closest("a[href^='#']");
  if (anchor) {
    e.preventDefault();
    const href = anchor.getAttribute("href");
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      lenis.scrollTo(targetElement, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      console.warn(`Target element not found for href: ${href}`);
    }
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop /> {/* Use the imported component */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogName" element={<BlogPage />} />
          <Route path="/cloud-security-monitoring" element={<CloudSecurityMonitoring />} />
          <Route path="/cloud-infrastructure-protection" element={<CloudInfrastructureProtection />} />
          <Route path="/identity-access-management" element={<IdentityAccessManagement />} />
          <Route path="/cloud-compliance-governance" element={<CloudComplianceGovernance />} />
          <Route path="/advisory-managed-security" element={<AdvisoryManagedSecurity />} />
          <Route path="/managed-detection-response" element={<ManagedDetectionResponse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);