import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DoctorLogin.css';

function DoctorLogin() {
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
  
    // Assuming login is successful, navigate to DoctorDashboard
    navigate('/doctor-dashboard');
  };

  return (
    <div className="doctor-login-container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="doctor-login-card card">
            <div className="card-body">
              <h2 className="card-title mb-4">Doctor Login</h2>
              <p>Welcome, Doctor! Access your professional tools and information here.</p>
              <form className="doctor-login-form" onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className={`doctor-login-input form-control ${errors.username ? 'is-invalid' : ''}`}
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); setErrors({ ...errors, username: null }); }}
                  />
                  {errors.username && <div className="doctor-login-error invalid-feedback">{errors.username}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className={`doctor-login-input form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: null }); }}
                  />
                  {errors.password && <div className="doctor-login-error invalid-feedback">{errors.password}</div>}
                </div>

                <button type="submit" className="doctor-login-button btn btn-primary">
                  Login
                </button>
              </form>

              <div className="mt-3">
                <Link to="/" className="doctor-login-back-button btn btn-secondary">
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

export default DoctorLogin;
