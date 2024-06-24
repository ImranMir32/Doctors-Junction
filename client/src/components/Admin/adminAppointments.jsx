// import React, { useState } from "react";
// import AppointmentCard from "../components/AppointmentCard";
// import "../../styles/admin/layout.css";

// const adminAppointments = () => {
//   const [appointments, setAppointments] = useState([
//     { id: 1, doctor: "Dr. John Doe", user: "Alice", status: "Pending" },
//     { id: 2, doctor: "Dr. Jane Smith", user: "Bob", status: "Pending" },
//   ]);

//   const handleUpdateStatus = (id, status) => {
//     setAppointments(
//       appointments.map((appointment) =>
//         appointment.id === id ? { ...appointment, status } : appointment
//       )
//     );
//     // Add logic to update appointment status
//   };

//   return (
//     <div className="page">
//       <h2>Appointments</h2>
//       <div className="card-container">
//         {appointments.map((appointment) => (
//           <AppointmentCard
//             key={appointment.id}
//             appointment={appointment}
//             onUpdateStatus={handleUpdateStatus}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default adminAppointments;
