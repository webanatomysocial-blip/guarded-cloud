import React from "react";
import { Link } from "react-router-dom";
// import Contactus from "../components/ContactForm";
import { Helmet } from 'react-helmet-async';
import Blogs from '../components/Blog';

function CaseStudies() {
  return (
    <>
     <Helmet>
        <title>Case Studies | Guarded Cloud

        </title>
        <meta
          name="description"
          content="  Reach our security engineers for assessments, pricing, and partnership."
        />

      </Helmet>
     <Blogs  marginTop="160px"/>
    </>
  );
}

export default CaseStudies;