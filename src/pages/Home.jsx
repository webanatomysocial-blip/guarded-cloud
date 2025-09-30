import "../css/index.css";
import "../css/Services.css";
import { ArrowRight } from 'react-bootstrap-icons'; // only icon import
import { Link } from 'react-router-dom'; // correct Link import for routing
import CarouselSection from "../components/CarouselSection";
import EverythingYouNeed from "../components/EverythingYouNeed";
import Whyteams from "../components/Why-teams";
import LightRays from "../components/LightRays";
import Contactus from "../components/ContactForm";
import FAQTemplate from "../components/Faq";
import Blogs from "../components/Blog";
import Azure from '../assets/images/Home-images/1.png';
import AWSs from '../assets/images/Home-images/2.png';
import gcp from '../assets/images/Home-images/3.png';
import { VscNoNewline } from "react-icons/vsc";
import videoFile from '../assets/banner-video.mp4';
import bannnnnnnn from '../assets/banner-img-after-vedeo.jpg';
import { Helmet } from 'react-helmet-async';
import TestimonialCarousel from "../components/TestimonialCarousel";
import { faqs } from "../data/faqs";



function Home() {
  return (
    <>
      <Helmet>
        <title>Cloud Security & Managed Services | Guarded Cloud</title>
        <meta
          name="description"
          content="Guarded Cloud secures your Microsoft/AWS/Google environments with MDR/XDR, CSPM, Zero Trust, and firewall management. Book a free security assessment and guard what’s next."
        />
        <meta name="keywords" content="cloudsecure, cybersecurity, services, home" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Video Section */}
      <section className="home-video-section-hero" id="home-banner">
        <video
          src={videoFile}
          noControls
          autoPlay
          muted
          loop
          playsInline
          className="background-video-home"
        />
        <a href="/contact" className="transparent-button-link"></a>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="sub-heading">Empower Your Future <br /></p>
          <p className="main-heading">Secure Your Cloud Now</p>
          <p className="text">
            Protecting sensitive data and workloads in the cloud requires more than just basic security controls. With evolving cyber threats, it’s essential to have continuous monitoring and intelligent threat detection in place.
          </p>
          <Link to="/contact" className="blue-button">
            Start for free <ArrowRight className="arrow-icon" />
          </Link>
        </div>

        <div className="right-banner-image">
          <img src={bannnnnnnn} alt="Cloud Security Banner" />
        </div>
      </section>

      {/* Images Section */}
      <section className="images-section">
        <div className="blur-left"></div>

        <a href="https://azure.microsoft.com/en-in"><img src={Azure} alt="Azure" /></a>
        <a href="https://cloud.google.com/"><img src={AWSs} alt="AWS" /></a>
        <a href="https://aws.amazon.com/"><img src={gcp} alt="GCP" /></a>

        <div className="blur-right"></div>
      </section>

      {/* Everything You Need Section */}
      <EverythingYouNeed />
      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2 className="main-heading">How It Works</h2>

        <div className="how-it-works-timeline">
          <div className="timeline-step">
            <div className="timeline-circle">1</div>
            <div className="timeline-content">
              <h3>Assess</h3>
              <p>We run a rapid posture & threat review across your cloud and critical controls.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-circle">2</div>
            <div className="timeline-content">
              <h3>Harden</h3>
              <p>We implement quick wins, prioritize risks, and deploy guardrails.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-circle">3</div>
            <div className="timeline-content">
              <h3>Monitor & Respond</h3>
              <p>Our analysts watch 24/7 and contain threats fast.</p>
            </div>
          </div>
        </div>

        <Link className="blue-button how-it-works-cta" to="/how-we-work">
          See the 30/60/90 plan <ArrowRight className="arrow-icon" />
        </Link>
      </section>



      {/* Why Teams Section */}
      <Whyteams />

      {/* Blogs Section */}
      {/* <Blogs backgroundColor="#fff" textColor="#000" marginTop="60px" /> */}
      <TestimonialCarousel />
      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="service-cta-content">
          <div className="cta-flex-container">
            <div className="cta-text">
              <h2 className="cta-heading">Book a FREE Security Assessment</h2>
              <p className="cta-text-white">Talk to an Engineer</p>
            </div>
            <div className="cta-buttons">
              <Link className="blue-button-no-hover" to="/contact">
                Book your session
              </Link>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}

export default Home;
