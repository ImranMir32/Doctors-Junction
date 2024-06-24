import React from "react";
import "../styles/cards.css";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <button onClick={() => onDelete(user.id)} className="btn delete">
        Delete
      </button>
    </div>
  );
};

export default UserCard;
