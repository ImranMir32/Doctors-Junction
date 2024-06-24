// import React, { useState } from "react";
// import DoctorCard from "../components/DoctorCard";
// import "../../styles/admin/layout.css";

// const adminDoctors = () => {
//   const [doctors, setDoctors] = useState([
//     { id: 1, name: "Dr. Emily Johnson", specialty: "Pediatrician" },
//     { id: 2, name: "Dr. Michael Brown", specialty: "Orthopedic Surgeon" },
//   ]);

//   const handleDelete = (id) => {
//     setDoctors(doctors.filter((doctor) => doctor.id !== id));
//     // Add logic to delete doctor
//   };

//   return (
//     <div className="page">
//       <h2>Doctors</h2>
//       <div className="card-container">
//         {doctors.map((doctor) => (
//           <DoctorCard key={doctor.id} doctor={doctor} onDelete={handleDelete} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default adminDoctors;
