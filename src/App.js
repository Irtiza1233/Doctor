import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WelcomePage from './WelcomePage';
import DoctorLogin from './DoctorLogin';
import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';
import DoctorDashboard from './DoctorDashboard';
import ReadMore from './ReadMore';
import Header from './Header';
import Footer from './Footer';
import Appointment from './Appointment';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
    
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
