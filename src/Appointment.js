import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Appointment.css';


const Appointment = () => {
  const location = useLocation();
  const { doctor } = location.state || {};

  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    time: '',
  });

  const bookAppointment = () => {
    console.log('Appointment booked:', appointmentDetails);
    toast.success('Appointment booked successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  const rescheduleAppointment = () => {
    console.log('Appointment rescheduled:', appointmentDetails);
    toast.info('Appointment rescheduled successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  const cancelAppointment = () => {
    console.log('Appointment canceled:', appointmentDetails);
    toast.error('Appointment canceled!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  return (
    <div className='divapp'>
      <ToastContainer />
      <h2>Appointment Page</h2>
      {doctor && (
        <div>
          <p>Selected Doctor: {doctor.name}</p>
        </div>
      )}

      <form>
        <label>Date:</label>
        <input
          type="date"
          value={appointmentDetails.date}
          onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })}
        />
        <br />

        <label>Time:</label>
        <input
          type="time"
          value={appointmentDetails.time}
          onChange={(e) => setAppointmentDetails({ ...appointmentDetails, time: e.target.value })}
        />
        <br />

        <button type="button" onClick={bookAppointment}>
          Book Appointment
        </button>
        <button type="button" onClick={rescheduleAppointment}>
          Reschedule Appointment
        </button>
        <button type="button" onClick={cancelAppointment}>
          Cancel Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
