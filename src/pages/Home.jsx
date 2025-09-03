// import Header from "../components/Header";
import "../css/index.css";
import { ArrowRight } from 'react-bootstrap-icons'; // Import ArrowRight icon
import CarouselSection from "../components/CarouselSection"; // Import CarouselSection component
import EverythingYouNeed from "../components/EverythingYouNeed"; // Import EverythingYouNeed component
import Whyteams from "../components/Why-teams"; // Import whyteams component
import LightRays from "../components/LightRays"; // Adjust path if necessary
import Contactus from "../components/ContactForm";
import FAQTemplate from "../components/FaqTemplate";
import Blogs from "../components/Blog"; // Import Blogs component
import Azure  from '../assets/images/Home-images/1.png'
import AWSs from '../assets/images/Home-images/2.png';
import gcp from '../assets/images/Home-images/3.png';



function Home() {





  return (
   
   <>


   {/* LightRays component at the top */}
      
        <LightRays
          raysOrigin="center-center"
          raysColor="#fff" // Custom color (teal)
          raysSpeed={0.5}
          lightSpread={1.2}
          rayLength={2}
          pulsating={true}
          fadeDistance={1.0}
          saturation={1}
          followMouse={true}
          mouseInfluence={0.4}
          noiseAmount={0.3}
          distortion={0.5}
          className="home-light-rays"
        />

   




      <section className="hero-section">
        <div className="hero-content">
          <p className="main-big-heading">
            Empower Your Future: <br /> Secure Your Cloud Now
          </p>
          <p className="sub-heading">
           Robust Security for SMBs & Startups

          </p>
          <a href="#contact" className="blue-button">Start for free
            <ArrowRight className="arrow-icon" />
          </a>


         <div className="banner">
           <span >Threat Defense: Proactive monitoring.</span> |
           <span className="circle">⦿</span> {/* Using a Unicode circle as a placeholder icon */}
           <span>Compliance: Standards met easily.</span>
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

           <a href="https://azure.microsoft.com/en-in"><img src={Azure} alt="Image 1" /></a> 
           <a href="https://cloud.google.com/"><img src={AWSs} alt="Image 1" /></a> 
           <a href="https://aws.amazon.com/"><img src={gcp} alt="Image 1" /></a> 

          
            


        <div className="blur-right">

        </div>  
 
      </section>

{/* images section End */}



      {/* Everything You Need Section start */}

 <EverythingYouNeed />

      {/* Everything You Need Section Endssssssssss */}

<Whyteams/>




{/* about us section start */}
{/* <section className="about-section">
      <div className="about-container">
        <h2 className="main-heading-White">About Us</h2>
        <p className="text-white">
          We are a cloud security company helping organizations secure workloads,
          identities, and data across public clouds. We partner with SMBs and
          startups worldwide to reduce risk and accelerate growth.
        </p>

        <div className="about-content">
    
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
    </section> */}


{/* about us section End */}

<Blogs backgroundColor="#fff"  textColor="#000"/>





{/* contact form start  */}
<Contactus/>
{/* contact form End */}





    </>
  );
}

export default Home;
