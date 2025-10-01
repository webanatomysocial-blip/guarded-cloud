import React from 'react'
import "../css/Header.css";
import { Link } from "react-router-dom";
// This page css is in Header.css
const NotFound = () => {
  return (
    <>
      <div className="not-found-container-2">
    <p className='text'>404 Not Found</p>
        <h2 className='main-big-heading'>
          This page is out of policy
        </h2>
        <p className='sub-heading'>The link you followed doesn’t exist or moved.</p>
        <Link to="/" className="blue-button">
          Go Home
        </Link>
      </div>

    </>
  )
}

export default NotFound
