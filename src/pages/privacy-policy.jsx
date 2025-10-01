import React from 'react'
import "../css/Header.css";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="not-found-container">
        <h2 className='main-big-heading' style={{textAlign:"center"}}>Privacy Policy</h2>
        <p className='sub-heading'>
          This Privacy Policy explains how Guarded Cloud collects, uses, and shares your personal information.
        </p>

        <div className="policy-content">
          <h3 className="sub-heading-bold">What we collect</h3>
          <p className="text-black">We may collect contact information, usage analytics, and support tickets you submit.</p>

          <h3 className="sub-heading-bold">How we use it</h3>
          <p className="text-black">Your data is used to provide services, improve features, and communicate with you.</p>

          <h3 className="sub-heading-bold">Sharing</h3>
          <p className="text-black">We do not sell personal data. We only share information with trusted processors under contract.</p>

          <h3 className="sub-heading-bold">Retention</h3>
          <p className="text-black">We retain data as long as necessary for the purposes outlined in this policy or to comply with legal obligations.</p>

          <h3 className="sub-heading-bold">Your rights</h3>
          <p className="text-black">You have the right to access, correct, delete your data, and opt-out of marketing communications.</p>

          <h3 className="sub-heading-bold">Contact</h3>
          <p className="text-black">If you have questions, contact us at <a href="mailto:privacy@guardedcloud.com">privacy@guardedcloud.com</a>.</p>
        </div>

        
      </div>
    </>
  )
}

export default PrivacyPolicy;
