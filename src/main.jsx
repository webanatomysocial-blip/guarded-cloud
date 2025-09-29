import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './components/Blog';
import BlogPage from './pages/BlogPage';
import CloudSecurityPosture from './pages/cloud-security-posture';
import ManagedDetectionResponse from './pages/managed-detection-response';
import ZeroTrustIdentity from './pages/zero-trust-identity';
import FirewallNetworkSecurity from './pages/firewall-network-security';
import EmailCollaborationSecurity from './pages/email-collaboration-security';
import DataProtectiondlp from './pages/data-protection-dlp';
import VulnerabilityPatchManagement from './pages/vulnerability-patch-management';
import BackupDisasterRecovery from './pages/backup-disaster-recovery';
import IncidentResponseRetainer from './pages/incident-response-retainer';
import Industries from './pages/industries';
import HowWeWork from './pages/how-we-work';
import Pricing from './pages/Pricing';
import SecurityCompliance from './pages/security-compliance';
import Resources from './pages/resources';
import Solutions from './components/solutions';
import NotFound from './pages/not-found';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import './css/Header.css';
import Layout from './components/layout';
import PrivacyPolicy from './pages/privacy-policy';
import TermsOfService from './pages/terms-of-service';
import CookiesPolicy from './pages/cookies-policy';
import DataProcessingAddendum from './pages/data-processing-addendum';
import FAQTemplate from './components/Faq';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/security" element={<SecurityCompliance />} />

              {/* Blogs */}
              <Route path="/case-studies" element={<Blogs />} />
              <Route path="/case-studies/:id" element={<BlogPage />} />

              <Route path="/resources" element={<Blogs />} />

              {/* Solution detail pages */}
              <Route path="/cloud-security-posture" element={<CloudSecurityPosture />} />
              <Route path="/managed-detection-response" element={<ManagedDetectionResponse />} />
              <Route path="/zero-trust-identity" element={<ZeroTrustIdentity />} />
              <Route path="/firewall-network-security" element={<FirewallNetworkSecurity />} />
              <Route path="/email-collaboration-security" element={<EmailCollaborationSecurity />} />
              <Route path="/data-protection-dlp" element={<DataProtectiondlp />} />
              <Route path="/vulnerability-patch-management" element={<VulnerabilityPatchManagement />} />
              <Route path="/backup-disaster-recovery" element={<BackupDisasterRecovery />} />
              <Route path="/incident-response-retainer" element={<IncidentResponseRetainer />} />


              {/* Legal Pages Routing */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiesPolicy />} />
              <Route path="/dpa" element={<DataProcessingAddendum />} />
              <Route path="/faq" element={<FAQTemplate />} />
            </Route>

            {/* Fallback for unknown routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>
);
