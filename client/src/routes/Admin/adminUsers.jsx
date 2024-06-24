// import React, { useState } from "react";
// import UserCard from "../components/UserCard";
// import "../../styles/admin/layout.css";

// const adminUsers = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Alice", email: "alice@example.com" },
//     { id: 2, name: "Bob", email: "bob@example.com" },
//   ]);

//   const handleDelete = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//     // Add logic to delete user
//   };

//   return (
//     <div className="page">
//       <h2>Users</h2>
//       <div className="card-container">
//         {users.map((user) => (
//           <UserCard key={user.id} user={user} onDelete={handleDelete} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default adminUsers;
