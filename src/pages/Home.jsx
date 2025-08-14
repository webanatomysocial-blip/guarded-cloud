// import Header from "../components/Header";
import "../css/index.css";
import { ArrowRight } from 'react-bootstrap-icons'; // Import ArrowRight icon
import CarouselSection from "../components/CarouselSection"; // Import CarouselSection component
import EverythingYouNeed from "../components/EverythingYouNeed"; // Import EverythingYouNeed component
import Whyteams from "../components/Why-teams"; // Import whyteams component


function Home() {
  return (
    <>
   

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


    </>
  );
}

export default Home;
