// WelcomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Import the CSS file

function WelcomePage() {
  return (
    <div className='tree'>
    <div className="container  mt-5">
        <h1 className="display-4">Welcome to </h1>
        <p className="lead">We care for your health and well-being.</p>
      <div className="mt-3">

        <Link to="/doctor-login" className="btn btn-doctor me-2">
          Login as a Doctor
        </Link>

        <Link to="/patient-login" className="btn btn-patient">
          Login as a Patient
        </Link>
      </div>
      </div>
    </div>
  );
}

export default WelcomePage;
