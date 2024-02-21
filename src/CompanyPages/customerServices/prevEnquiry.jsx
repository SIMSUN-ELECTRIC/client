import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PrevEnquiry = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const userId = useSelector((state) => state.user.userData._id);
  const modalRef = useRef(null);

  useEffect(() => {
    fetchInquiries();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userId]);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/Cart/prevEnquiry/${userId}`
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch inquiries");
      }
      setInquiries(response.data);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const openDetailsModal = (Enquiry) => {
    setSelectedEnquiry(Enquiry);
  };

  const closeDetailsModal = () => {
    setSelectedEnquiry(null);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeDetailsModal();
    }
  };

  return (
    <div className="container mx-auto md:mt-32 justify-center pt-28 md:pt-4">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center mb-2">
          <h2 className="text-2xl font-bold">Prev Enquiry</h2>
        </div>
        <ul className="list-disc">
          {inquiries.map((Enquiry) => (
            <li
              key={Enquiry._id}
              className="user-item flex justify-between items-center p-4 border bg-white hover:bg-gray-100 transition duration-300"
            >
              <div className="user-info grid grid-rows-2">
                <div>
                  <strong>Name:</strong> {Enquiry.name}
                </div>
                <div>
                  <strong>Email:</strong> {Enquiry.email}
                </div>
                <div>
                  <strong>Products:</strong>
                  <ul className="list-disc pl-8">
                    {Enquiry.items.map((item, index) => (
                      <li key={index}>
                        <div className="font-semibold">{item.name}</div>
                        <div>Price: {item.price}</div>
                        <div>Quantity: {item.quantity}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                className="details-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                onClick={() => openDetailsModal(Enquiry)}
              >
                See Details
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Enquiry Details Modal */}
      {selectedEnquiry && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div
            ref={modalRef}
            className="Enquiry-details-modal bg-white p-8 rounded shadow-lg w-96"
          >
            <h2 className="text-2xl font-bold mb-4">Enquiry Details</h2>
            <div className="mb-4">
              <strong>Name:</strong> {selectedEnquiry.name}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {selectedEnquiry.email}
            </div>
            <div className="mb-4">
              <strong>Enquiry:</strong> {selectedEnquiry.EnquiryDetails}
            </div>
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

export default PrevEnquiry;
