import React from 'react';
import './PatientDashboard.css';
import { Link } from 'react-router-dom';
const doctors = [
  { name: 'Dr. John Doe', image: 'doctor1.jpg', specialty: 'Cardiologist' },
  { name: 'Dr. Jane Smith', image: 'doctor2.jpg', specialty: 'Orthopedic Surgeon' },
  { name: 'Dr. Mark Johnson', image: 'doctor3.jpg', specialty: 'Dermatologist' },
  { name: 'Dr. Sarah Lee', image: 'doctor4.jpg', specialty: 'Pediatrician' },
  { name: 'Dr. Michael Brown', image: 'doctor5.jpg', specialty: 'Neurologist' },
  { name: 'Dr. Emily White', image: 'doctor6.jpg', specialty: 'Ophthalmologist' },
  { name: 'Dr. Robert Taylor', image: 'doctor7.jpg', specialty: 'Gynecologist' },
  { name: 'Dr. Alex Wilson', image: 'doctor8.jpg', specialty: 'ENT Specialist' },
  // Add more doctors as needed
];

const PatientDashboard = () => {
  const handleBookAppointment = (doctorName) => {
    // Implement logic for booking appointment with the selected doctor
    console.log(`Appointment booked with Dr. ${doctorName}`);
  };

  return ( 
    <div className="">

      <div className="row back">
        <div className="col-md-6 left-box">
          <h2>Empower Your Health Journey</h2>
          <p>Well-being First: Your journey to optimal health with personalized care at its core.</p>
          <button className="btn btn-primary button">Find a Doctor</button>
          <Link to="/Read-More" className="btn btn-secondary">
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
          <i className="material-icons">emoji_events</i> {/* Change the icon to 'emoji_events' */}
          <h3>18</h3>
          <p>Years of Experience</p>
        </div>
        </div>



{/* New row with two big boxes */}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
   
          <button className="btn btn-info">Know More</button>
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
            <Link to="/appointment" className="btn btn-success">
  Book an Appointment
</Link>

          </div> ))}
      </div>




        
      </div>
    </div>
    </div>
  );
};


export default PatientDashboard;
