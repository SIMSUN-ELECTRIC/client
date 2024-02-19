import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PrevInquiry = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    fetchInquiries();
  }, [userId]);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/Cart/prevInquiry/${userId}`
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch inquiries");
      }
      console.log("this is response", response);
      setInquiries(response.data);
    } catch (error) {
      console.error("",error);
    }
  };

  const openDetailsModal = (inquiry) => {
    setSelectedInquiry(inquiry);
  };

  const closeDetailsModal = () => {
    setSelectedInquiry(null);
  };

  return (
    <div className="container mx-auto md:mt-32 justify-center pt-28 md:pt-4">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center mb-2">
          <h2 className="text-2xl font-bold">Prev Inquiry</h2>
        </div>
        <ul>
          {inquiries.map((inquiry) => (
            <li
              key={inquiry._id}
              className="user-item flex justify-between items-center p-4 border bg-white hover:bg-gray-100 transition duration-300"
            >
              <div className="user-info grid grid-rows-2">
                <div>
                  <strong>Name:</strong> {inquiry.name}
                </div>
                <div>
                  <strong>Email:</strong> {inquiry.email}
                </div>
              </div>
              <button
                className="details-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                onClick={() => openDetailsModal(inquiry)}
              >
                See Details
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Inquiry Details Modal */}
      {selectedInquiry && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="inquiry-details-modal bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Inquiry Details</h2>
            <div className="mb-4">
              <strong>Name:</strong> {selectedInquiry.name}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {selectedInquiry.email}
            </div>
            <div className="mb-4">
              <strong>Inquiry:</strong> {selectedInquiry.inquiryDetails}
            </div>
            {/* Add other inquiry details here */}
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

export default PrevInquiry;
