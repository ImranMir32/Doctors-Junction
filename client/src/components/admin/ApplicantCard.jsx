import React from "react";
import "../../styles/admin/cards.css";

const ApplicantCard = ({ applicant, onAccept, onReject }) => {
  return (
    <div className="card">
      <div className="left">
        <img
          src={applicant.userId.imageUrl}
          alt="profile"
          className="profile-image"
        />
      </div>
      <div className="right">
        <div className="card-details">
          <h3>Name: {applicant.userId.name}</h3>
          <p>Description: {applicant.description}</p>
          <p>Specialist: {applicant.specialist}</p>
          <p>Experience: {applicant.experience}</p>
          <p>Fees: {applicant.fees}</p>
          <p>Phone: {applicant.userId.phone}</p>
          <p>Email: {applicant.userId.email}</p>
          <p>Address: {applicant.userId.address}</p>
          <div className="actions">
            <button
              onClick={() => onAccept(applicant.id)}
              className="btn accept"
            >
              Accept
            </button>
            <button
              onClick={() => onReject(applicant.id)}
              className="btn reject"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;
