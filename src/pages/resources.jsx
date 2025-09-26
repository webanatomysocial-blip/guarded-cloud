import React from 'react'
import { Helmet } from 'react-helmet-async';
import "../css/Header.css";
import "../css/resources.css";

import cloudCompliance from '../assets/images/services-imgs/cloud-compliance-governance-img.jpg';
const Resources = () => {
  return (
   <>
   <Helmet>
        <title>Resources | Guarded Cloud

        </title>
        <meta
          name="description"
          content=" Guides, checklists, and insights on cloud security, Zero Trust, MDR, and compliance."
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
   </>
  )
}

export default Resources;
