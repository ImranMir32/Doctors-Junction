import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admin/dashboard.css";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>Admin Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/dashboard/applications">Doctor Applicants</Link>
          {/* <Link to="/users">Users</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/appointments">Appointments</Link> */}
        </nav>
      </div>
    </>
  );
};

export default Dashboard;
