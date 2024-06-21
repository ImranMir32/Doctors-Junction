import React from "react";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";

const mockDoctors = [
  {
    _id: "1",
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    experience: "10 years",
    photo: "doctor1.jpg", // Assuming you have images in your public folder
  },
  {
    _id: "2",
    name: "Dr. Jane Smith",
    specialization: "Neurologist",
    experience: "8 years",
    photo: "doctor2.jpg",
  },
  {
    _id: "3",
    name: "Dr. Emily Johnson",
    specialization: "Pediatrician",
    experience: "5 years",
    photo: "doctor3.jpg",
  },
];

const Doctors = () => {
  const doctors = mockDoctors;

  return (
    <>
      <Navbar />
      <section className="container doctors">
        <h2 className="page-heading">Our Doctors</h2>
        <div className="doctors-card-container">
          {doctors.map((ele) => {
            return <DoctorCard ele={ele} key={ele._id} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Doctors;
