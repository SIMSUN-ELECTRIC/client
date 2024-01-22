import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const state = useSelector((state) => state.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      console.log("Redirecting to /auth/AdminLogin");
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  useEffect(() => {
    // Fetch user data from the backend
    axios
      .get("http://localhost:5000/api/getUsers")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const openDetailsModal = (user) => {
    setSelectedUser(user);
  };

  const closeDetailsModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto mt-8">
      <div>
        <h2 className="mt-24 text-2xl font-bold">Engineer Details</h2>
        <ul>
          {users.engineers &&
            users.engineers.map((user) => (
              <li
                key={user._id}
                className="user-item flex justify-between items-center p-4 border bg-white hover:bg-gray-100 transition duration-300"
              >
                <div className="user-info">
                  <strong>Name:</strong> {user.fullName}
                  <br />
                  <strong>Email:</strong> {user.email}
                </div>
                <button
                  className="details-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={() => openDetailsModal(user)}
                >
                  See Details
                </button>
              </li>
            ))}
        </ul>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="user-details-modal bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Engineer Details</h2>
            <div className="mb-4">
              <strong>Name:</strong> {selectedUser.fullName}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {selectedUser.email}
            </div>
            <div className="mb-4">
              <strong>UserName:</strong> {selectedUser.userName}
            </div>
            <div className="mb-4">
              <strong>Phone Number:</strong> {selectedUser.phoneNumber}
            </div>
            <div className="mb-4">
              <strong>Experience:</strong> {selectedUser.experience}
            </div>
            <div className="mb-4">
              <strong>Field:</strong> {selectedUser.field}
            </div>
            <div className="mb-4">
              <strong>Certificate:</strong> {selectedUser.certificate}
            </div>
            <div className="mb-4">
              <strong>WhatsApp Number:</strong> {selectedUser.whatsappNumber}
            </div>
            <div className="mb-4">
              <strong>Location:</strong> {selectedUser.location}
            </div>
            <div className="mb-4">
              <strong>Address:</strong> {selectedUser.address}
            </div>
            <div className="mb-4">
              <strong>Pin Code:</strong> {selectedUser.pinCode}
            </div>
            <div className="mb-4">
              <strong>Description:</strong> {selectedUser.description}
            </div>

            {/* Add other user details here */}
            <button
              className="close-modal bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
              onClick={closeDetailsModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
