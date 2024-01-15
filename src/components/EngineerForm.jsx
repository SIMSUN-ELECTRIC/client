import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EngineerDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    experience: "",
    field: "",
    certificates: "",
    degree: "",
    description: "",
    whatsappNumber: "",
    location: "",
    pinCode: "",
    address: "",
  });

  const state = useSelector((state) => state.user);
  console.log(state?.userData?.isEngineer);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Current state:", state);
    console.log("Checking isEngineer:", state?.isEngineer);

    if (!state?.userData?.isEngineer) {
      console.log("Redirecting to /auth/EngineerLogin");
      navigate("/auth/EngineerLogin");
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic here
    const formDataWithFile = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithFile.append(key, value);
    });

    // Add logic to submit the form data with the file
    console.log("Form Data Submitted:", formDataWithFile);
    // Reset form data if needed
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      experience: "",
      field: "",
      certificates: "",
      degree: "",
      description: "",
      whatsappNumber: "",
      location: "",
      pinCode: "",
      address: "",
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="mt-16 flex justify-center text-3xl font-bold mb-6">
        Engineer Details Form
      </h1>
      <form
        className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Experience
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Field */}
        <div className="mb-4">
          <label
            htmlFor="field"
            className="block text-sm font-medium text-gray-700"
          >
            Working Field
          </label>
          <input
            type="text"
            id="field"
            name="field"
            value={formData.field}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Degree and Certificates */}
        <div className="mb-4">
          <label
            htmlFor="degree"
            className="block text-sm font-medium text-gray-700"
          >
            Degree and Certificates
          </label>
          <input
            type="file"
            id="degree"
            name="degree"
            accept=".pdf"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* WhatsApp Number */}
        <div className="mb-4">
          <label
            htmlFor="whatsappNumber"
            className="block text-sm font-medium text-gray-700"
          >
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label
            htmlFor="location for working"
            className="block text-sm font-medium text-gray-700"
          >
            Location For Working
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        {/* Pin Code */}
        <div className="mb-4">
          <label
            htmlFor="pinCode"
            className="block text-sm font-medium text-gray-700"
          >
            Pin Code
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EngineerDetailsForm;
