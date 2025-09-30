import React from 'react'
import { Helmet } from 'react-helmet-async';
import "../css/Header.css";
import "../css/resources.css";
import Blogs from '../components/Blog';

// import cloudCompliance from '../assets/images/services-imgs/cloud-compliance-governance-img.jpg';
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





       
      </Helmet>


      <Blogs  marginTop="160px"/>
   </>
  )
}

export default Resources;