import React from "react";
import { Link } from "react-router-dom";
import Contactus from "../components/ContactForm";
import { Helmet } from 'react-helmet-async';

function Contact() {
  return (
    <>
     <Helmet>
        <title>Contact | Guarded Cloud

        </title>
        <meta
          name="description"
          content="  Reach our security engineers for assessments, pricing, and partnership.
"
        />

        {/* <meta name="keywords" content="cloudsecure, cybersecurity, services, home" />
        <meta name="robots" content="index, follow" /> */}
        {/* <meta property="og:title" content="Home - CloudSecure" />
        <meta property="og:description" content="Welcome to CloudSecure! Explore our cybersecurity services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com/" /> */}
      </Helmet>
    <section>
    <Contactus></Contactus>
    </section>
    </>
  );
}

export default Contact;