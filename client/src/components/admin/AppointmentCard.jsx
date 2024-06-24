import React from "react";
import "../styles/cards.css";

const AppointmentCard = ({ appointment, onUpdateStatus }) => {
  return (
    <div className="card">
      <h3>Appointment with {appointment.doctor}</h3>
      <p>User: {appointment.user}</p>
      <p>Status: {appointment.status}</p>
      <div className="actions">
        <button
          onClick={() => onUpdateStatus(appointment.id, "Completed")}
          className="btn complete"
        >
          Complete
        </button>
        <button
          onClick={() => onUpdateStatus(appointment.id, "Canceled")}
          className="btn cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
