import React, { useRef } from 'react';
import './PatientDashboard.css';
import { Link } from 'react-router-dom';
const doctors = [
  { name: 'Dr. John Doe', image: 'doctor1.jpg', specialty: 'Cardiologist' },
  { name: 'Dr. Jane Smith', image: 'doctor2.jpg', specialty: 'Orthopedic Surgeon' },
  { name: 'Dr. Mark Johnson', image: 'doctor3.jpg', specialty: 'Dermatologist' },
  { name: 'Dr. Alex Wilson', image: 'doctor4.jpg', specialty: 'Pediatrician' },
  { name: 'Dr. Michael Brown', image: 'doctor5.jpg', specialty: 'Neurologist' },
  { name: 'Dr. Emily White', image: 'doctor6.jpg', specialty: 'Ophthalmologist' },
  { name: 'Dr. Robert Taylor', image: 'doctor7.jpg', specialty: 'Gynecologist' },
  { name: ' Dr. Sarah Lee', image: 'expert.jpg', specialty: 'ENT Specialist' },
 
];
const PatientDashboard = () => {
  const doctorsAreaRef = useRef(null);

  const handleFindDoctorClick = () => {
    // Check if the ref is assigned before attempting to scroll
    if (doctorsAreaRef.current) {
      doctorsAreaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return ( 
    <div className="">
    <div className="row back">
      <div className="col-md-6 left-box">
        <h2 className='top'>Empower Your Health Journey</h2>
        <p className='sectop'>Your health, our priority. Quality care, always</p>

        <button className="btn btn-find button" onClick={handleFindDoctorClick}>
          Find a Doctor
        </button>
        <Link to="/Read-More" className="btn btn-read">
          Read More
        </Link>
      </div>
        <div className="col-md-6 right-box">
          <img
            src="right.jpg"
            alt="Patient Dashboard Image"
            style={{ width: '100%', height: 'auto' }}
          />
        </div></div>



      <div className='container'>
      {/* New row with four small boxes */}
      <div className="row">
        <div className="col-md-3 small-box">
          <i className="material-icons">local_hotel</i>
          <h3>850</h3>
          <p>Patients Beds</p>
        </div>
        <div className="col-md-3 small-box">
          <i className="material-icons">people</i>
          <h3>25000+</h3>
          <p>Happy Patients</p>
        </div>
        <div className="col-md-3 small-box">
          <i className="material-icons">local_hospital</i>
          <h3>750</h3>
          <p>Doctors & Nurses</p>
        </div>
        <div className="col-md-3 small-box">
          <i className="material-icons">emoji_events</i>
          <h3>18</h3>
          <p>Years of Experience</p>
        </div>
        </div>


 <div className="row">
 <div className="col-md-6 big-box left-big-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img
    src="doctor1.jpg"
    alt="Hospital Image"
    style={{ width: '60%', height: 'auto', marginBottom: '10px' }}
  />
     
        </div>
        <div className="col-md-6 big-box right-big-box">
        <h2 className='Our'>About Our Hospital</h2>
          <p className='Para'>
          IrtizaMediCare is your go-to online healthcare hub, offering seamless access to experienced doctors and valuable health tips. Schedule virtual appointments effortlessly and prioritize your well-being with our user-friendly platform. Your health, our priority.
          </p>
   
          <Link to="/Read-More" className="  know">
        Know More
      </Link>
        </div>



        <div className='Doctors-Area' ref={doctorsAreaRef}>
        <h1>Our Doctors</h1>
        {/* ... (other code) */}
      </div>

        <div className="row">
        {doctors.map((doctor, index) => (
          <div key={index} className="col-md-3 doctor-profile profile-container">
            <img
              src={doctor.image}
              alt={`Dr. ${doctor.name}`}
              style={{ width: '100%', height: 'auto' }}
            />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <Link to="/appointment" className="btn btn-success book">
  Book an Appointment
</Link>

          </div> ))}
      </div>



      <div class='expertise'>
  <div class='left-expertise'>
    <img src="expert.jpg" alt="Your Image" />
  </div>
  <div class='right-expertise'>
    <div class='box'>
      <i class="material-icons icon-blue icon-large icon-circle">local_hospital</i>
      <h3>Certified Doctor</h3>
      <p>Expert in healthcare.</p>
    </div>
    <div class='box'>
      <i class="material-icons icon-blue icon-large icon-circle">warning</i>
      <h3>Emergency</h3>
      <p>Rapid response specialist.</p>
    </div>
    <div class='box'>
      <i class="material-icons icon-blue icon-large icon-circle">desktop_windows</i>
      <h3>Technology</h3>
      <p>Tech innovator.</p>
    </div>
    <div class='box'>
      <i class="material-icons icon-blue icon-large icon-circle">local_hospital</i>
      <h3>Ambulance</h3>
      <p>Emergency transport expert.</p>
    </div>
  </div>
</div>



        
      </div>
    </div>
    </div>
  );
};


export default PatientDashboard;
