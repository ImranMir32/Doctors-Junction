import React from "react";
import "../styles/cards.css";

const DoctorCard = ({ doctor, onDelete }) => {
  return (
    <div className="card">
      <h3>{doctor.name}</h3>
      <p>Specialty: {doctor.specialty}</p>
      <button onClick={() => onDelete(doctor.id)} className="btn delete">
        Delete
      </button>
    </div>
  );
};

export default DoctorCard;
