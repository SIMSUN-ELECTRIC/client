import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EngineerRegister = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [certificates, setCertificates] = useState(null);
  const [certificates, setCertificates] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [field, setfield] = useState("");
  const [whatsappNumber, setwhatsappNumber] = useState("");
  const [location, setlocation] = useState("");
  const [address, setaddress] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [description, setdescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/EngineerRegister",
        {
          fullName,
          email,
          password,
          userName,
          phoneNumber,
          experience,
          certificates,
          field,
          whatsappNumber,
          location,
          address,
          pinCode,
          description,
        }
      );

      if (response.status === 200) {
        const json = response.data;
        console.log(json);
        toast.success("Send to Admin, wait for approval you will get mail !");
        navigate("/auth/EngineerLogin");
      } else {
        console.error("Registration failed with status code:", response.status);
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="mt-24 w-full max-w-6xl p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Engineer Registration</h1>
        <form onSubmit={handleSubmit} className="lg:flex lg:flex-wrap">
          <div className="mb-4 lg:w-1/2 lg:pr-2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Experience */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Field */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="field"
              className="block text-sm font-medium text-gray-700"
            >
              Working Field<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="field"
              name="field"
              value={field}
              onChange={(e) => setfield(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="degree"
              className="block text-sm font-medium text-gray-700"
            >
              Degree and Certificates
              <span className="text-red-500">(paste links if any)</span>
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={field}
              onChange={(e) => setCertificates(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            {/* <input
              type="file"
              id="degree"
              name="degree"
              accept=".pdf"
              onChange={(e) => setCertificates(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            /> */}
          </div>

          {/* WhatsApp Number */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="whatsappNumber"
              className="block text-sm font-medium text-gray-700"
            >
              WhatsApp Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              value={whatsappNumber}
              onChange={(e) => setwhatsappNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="location for working"
              className="block text-sm font-medium text-gray-700"
            >
              Location For Working<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address<span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          {/* Pin Code */}
          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="pinCode"
              className="block text-sm font-medium text-gray-700"
            >
              Pin Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={pinCode}
              onChange={(e) => setpinCode(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 lg:w-1/2 lg:pl-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              description<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/auth/EngineerLogin"
            className="text-blue-500 hover:underline"
          >
            Already have an account? Login here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EngineerRegister;
