// import Header from "../components/Header";
import "../css/index.css";
import { ArrowRight } from 'react-bootstrap-icons'; // Import ArrowRight icon
import CarouselSection from "../components/CarouselSection"; // Import CarouselSection component
import EverythingYouNeed from "../components/EverythingYouNeed"; // Import EverythingYouNeed component
import Whyteams from "../components/Why-teams"; // Import whyteams component
import LightRays from "../components/LightRays"; // Adjust path if necessary
import Contactus from "../components/ContactForm";
import FAQTemplate from "../components/FaqTemplate";



function Home() {










  return (
   
   <>


   {/* LightRays component at the top */}
      
        <LightRays
          raysOrigin="top-center"
          raysColor="#04243f" // Custom color (teal)
          raysSpeed={0.5}
          lightSpread={1.2}
          rayLength={1.5}
          pulsating={true}
          fadeDistance={1.0}
          saturation={0.8}
          followMouse={true}
          mouseInfluence={0.4}
          noiseAmount={0.3}
          distortion={1}
          className="home-light-rays"
        />

   




      <section className="hero-section">
        <div className="hero-content">
          <p className="main-big-heading">
            CREATE PRO LEVEL <br />
            VIDEOS IN THE BLINK OF AI
          </p>
          <p className="sub-heading">
            Make better videos faster. AI-powered video creation for teams
          </p>
          <a href="#" className="blue-button">Start for free
            <ArrowRight className="arrow-icon" />
          </a>


         <div className="banner">
           <span >* No credit card required</span> |
           <span className="circle">⦿</span> {/* Using a Unicode circle as a placeholder icon */}
           <span>Rated 4.6 out of 5 on G2</span>
         </div>

 

        </div>
      </section>
{/* carosule section start */}

       <CarouselSection />

{/* carosule section End */}






{/* images section start  */}

      <section className="images-section">
        <div className="blur-left">

        </div>

            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 1" />

            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 2" />

            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 3" />
            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 3" />
            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 3" />
            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 3" />
            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 3" />
            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 3" />
            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 3" />
            <img src="https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/pentax_912257cd99/pentax_912257cd99.png" alt="Image 3" />



        <div className="blur-right">

        </div>  
 
      </section>

{/* images section End */}



      {/* Everything You Need Section start */}

 <EverythingYouNeed />

      {/* Everything You Need Section Endssssssssss */}

<Whyteams/>




{/* about us section start */}
<section className="about-section">
      <div className="about-container">
        <h2 className="main-heading-White">About Us</h2>
        <p className="text-white">
          We are a cloud security company helping organizations secure workloads,
          identities, and data across public clouds. We partner with SMBs and
          startups worldwide to reduce risk and accelerate growth.
        </p>

        <div className="about-content">
          {/* Timeline */}
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2023</span>
              <h3 className="sub-heading-white">Founded</h3>
              <p className="text">
                Launched with a mission to bring enterprise-grade security to
                fast-moving teams.
              </p>
            </div>

            <div className="timeline-item">
              <span className="year">2024</span>
              <h3 className="sub-heading-white">Global Coverage</h3>
              <p className="text">
                Expanded to 24/7 operations serving clients across regions.
              </p>
            </div>

            <div className="timeline-item">
              <span className="year">2025</span>
              <h3 className="sub-heading-white">MDR Launch</h3>
              <p  className="text">
                Introduced Managed Detection & Response with aggressive SLAs.
              </p>
            </div>
          </div>

          {/* Leadership Card */}
          <div className="leadership-card">
            <h3 className="sub-heading-white">Leadership</h3>
            <p className="text-white">
              Seasoned cloud and security leaders with experience across
              hyperscalers and regulated industries.
            </p>
            <ul className="text-white">
              <li>Principal Architect — Cloud Security</li>
              <li>Head of Detection Engineering</li>
              <li>Compliance & Governance Lead</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
{/* about us section End */}





{/* contact form start  */}
<Contactus/>
{/* contact form End */}





    </>
  );
}

export default Home;
