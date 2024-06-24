import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ApplicantCard from "../../components/admin/ApplicantCard";
import "../../styles/admin/layout.css";
import { GlobalMethodsContext } from "../../Context/GlobalMethodsContext";
import { GlobalStateContext } from "../../Context/Global_Context";

const AdminApplicants = () => {
  const navigate = useNavigate();
  const { getApplicantdoctors } = useContext(GlobalMethodsContext);
  const { applicationList } = useContext(GlobalStateContext);

  const getAllApp = async () => {
    try {
      await getApplicantdoctors();
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  const handleAccept = async (id) => {
    console.log(`Accept applicant with ID: ${id}`);
    await getAllApp();
  };

  const handleReject = async (id) => {
    console.log(`Reject applicant with ID: ${id}`);
    await getAllApp();
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAllApp();
    };

    fetchData(); // Immediately invoke the fetchData function

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="page">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <h2>Doctor Applicants</h2>
      </div>
      <div className="card-container">
        {applicationList && applicationList.length > 0 ? (
          applicationList.map((applicant) => (
            <ApplicantCard
              key={applicant.id} // Assuming applicant.id is unique
              applicant={applicant}
              onAccept={() => handleAccept(applicant.id)}
              onReject={() => handleReject(applicant.id)}
            />
          ))
        ) : (
          <p>No applicants found</p>
        )}
      </div>
    </div>
  );
};

export default AdminApplicants;
