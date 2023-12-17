import React from 'react';

const DoctorProfile = ({ name, image }) => {
  return (
    <div className="doctor-profile">
      <img src={image} alt={name} className="doctor-image" />
      <h3 className="doctor-name">{name}</h3>
    </div>
  );
};

export default DoctorProfile;
