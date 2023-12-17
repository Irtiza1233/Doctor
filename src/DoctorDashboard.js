// DoctorDashboard.js

import React, { useState } from 'react';
import './DoctorDashboard.css';

function DoctorDashboard() {
  // Mock data for schedules, appointment slots, patient details, and medical history
  const mockSchedules = [
    { id: 1, day: 'Monday', time: '10:00 AM - 12:00 PM' },
    { id: 2, day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
    // Add more schedule data as needed
  ];

  const mockAppointmentSlots = [
    { id: 1, time: '9:00 AM', status: 'Available' },
    { id: 2, time: '11:00 AM', status: 'Booked', patient: 'Jane Smith' },
    // Add more appointment slot data as needed
  ];

  const mockPatientDetails = [
    { id: 1, name: 'John Doe', age: 35, contact: '123-456-7890', lastVisit: '2023-01-15' },
    { id: 2, name: 'Jane Smith', age: 28, contact: '987-654-3210', lastVisit: '2023-02-20' },
    // Add more patient details data as needed
  ];

  const mockMedicalHistory = [
    { id: 1, condition: 'Hypertension', medications: 'Lisinopril' },
    { id: 2, condition: 'Diabetes', medications: 'Metformin' },
    // Add more medical history data as needed
  ];

  // State for additional features
  const [notifications, setNotifications] = useState([
    'New appointment scheduled for tomorrow.',
    'Patient follow-up required for John Doe.',
    // Add more notifications as needed
  ]);

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    { id: 1, patient: 'Jane Smith', time: '2:30 PM - 3:30 PM' },
    { id: 2, patient: 'Bob Johnson', time: '4:00 PM - 5:00 PM' },
    // Add more upcoming appointments as needed
  ]);

  const [prescriptions, setPrescriptions] = useState([
    { id: 1, patient: 'John Doe', medication: 'Aspirin', dosage: '100mg', instructions: 'Once a day' },
    { id: 2, patient: 'Jane Smith', medication: 'Ibuprofen', dosage: '200mg', instructions: 'Twice a day' },
    // Add more prescriptions as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle searching for patients
  const handleSearch = () => {
    // Simulated search logic (replace with actual implementation)
    const results = mockPatientDetails.filter((patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  // Additional features
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Review patient charts', completed: false },
    { id: 2, description: 'Call patient for follow-up', completed: true },
    // Add more tasks as needed
  ]);

  const [patientStatistics, setPatientStatistics] = useState({
    totalPatients: mockPatientDetails.length,
    averageAge: Math.round(
      mockPatientDetails.reduce((sum, patient) => sum + patient.age, 0) / mockPatientDetails.length
    ),
  });

  const handleTaskCompletion = (taskId) => {
    // Toggle task completion status
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="doctor-dashboard-container">
      <h2>Doctor Dashboard</h2>

      {/* Display Notifications */}
      <div className="dashboard-section">
        <h3>Notifications</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>

      {/* Search for Patients */}
      <div className="dashboard-section">
        <h3>Search for Patients</h3>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter patient name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {/* Display search results */}
        <div className="search-results">
          {searchResults.map((result) => (
            <div key={result.id} className="search-result">
              {result.name} - {result.age} years - Contact: {result.contact}
            </div>
          ))}
        </div>
      </div>

      {/* Display Schedules */}
      <div className="dashboard-section">
        <h3>Schedules</h3>
        {mockSchedules.map((schedule) => (
          <div key={schedule.id} className="schedule-event">
            {schedule.day} - {schedule.time}
          </div>
        ))}
      </div>

      {/* Manage Appointment Slots */}
      <div className="dashboard-section">
        <h3>Appointment Slots</h3>
        {mockAppointmentSlots.map((slot) => (
          <div key={slot.id} className={`appointment-slot ${slot.status === 'Booked' ? 'booked' : ''}`}>
            {slot.time} - {slot.status === 'Booked' ? `Booked by ${slot.patient}` : 'Available'}
          </div>
        ))}
      </div>

      {/* Upcoming Appointments */}
      <div className="dashboard-section">
        <h3>Upcoming Appointments</h3>
        {upcomingAppointments.map((appointment) => (
          <div key={appointment.id} className="upcoming-appointment">
            {appointment.patient} - {appointment.time}
          </div>
        ))}
      </div>

      {/* Patient Analytics */}
      <div className="dashboard-section">
        <h3>Patient Analytics</h3>
        <div className="patient-statistics">
          <p>Total Patients: {patientStatistics.totalPatients}</p>
          <p>Average Age: {patientStatistics.averageAge} years</p>
        </div>
      </div>

      {/* Manage Patient Prescriptions */}
      <div className="dashboard-section">
        <h3>Prescriptions</h3>
        {prescriptions.map((prescription) => (
          <div key={prescription.id} className="prescription">
            <div>
              <strong>Patient:</strong> {prescription.patient}
            </div>
            <div>
              <strong>Medication:</strong> {prescription.medication}
            </div>
            <div>
              <strong>Dosage:</strong> {prescription.dosage}
            </div>
            <div>
              <strong>Instructions:</strong> {prescription.instructions}
            </div>
          </div>
        ))}
      </div>

      {/* Task List */}
      <div className="dashboard-section">
        <h3>Task List</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed-task' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion(task.id)}
              />
              {task.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DoctorDashboard;
  