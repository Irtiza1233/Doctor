// PatientLogin.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PaitentLogin.css';

function PatientLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate the form
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Please enter the username.';
    }
    if (!password) {
      newErrors.password = 'Please enter the password.';
    }

    // If there are errors, set them and prevent login
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Assuming login is successful, navigate to PatientDashboard
    navigate('/patient-dashboard');
  };

  return (
    <div className="patient-login-container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="patient-login-card card">
            <div className="card-body">
              <h2 className="card-title mb-4">Patient Login</h2>
              <p>Unwell? Our medical professionals are here to assist. Wishing you a speedy recovery!</p>
              <form className="patient-login-form" onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className={`patient-login-input form-control ${errors.username ? 'is-invalid' : ''}`}
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); setErrors({ ...errors, username: null }); }}
                  />
                  {errors.username && <div className="patient-login-error invalid-feedback">{errors.username}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className={`patient-login-input form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: null }); }}
                  />
                  {errors.password && <div className="patient-login-error invalid-feedback">{errors.password}</div>}
                </div>

                <button type="submit" className="patient-login-button btn btn-primary">
                  Login
                </button>
              </form>

              <div className="mt-3">
                <Link to="/" className="patient-login-back-button btn btn-secondary">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;

