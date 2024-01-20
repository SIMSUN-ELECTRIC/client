import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
import logo1 from "../../assets/img/logo2.jpeg";
import Feedback from "../Feedback";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-2 md:flex md:justify-between md:items-center  sm:px-4 px-4 bg-[#ffffff19] py-4">
        <div className="">
          <h1 className="text-4xl font-blod ">
            <span className="text-red-500 ">Free</span> Subscribe Us
          </h1>
        </div>
        <div className="sm:my-0 my-3  ">
          <img src={logo1} alt="" className="w-20 rounded-full " />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="bg-white h-0.3px w-full "></div>
      <Feedback />
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-0"
      >
        <span>Copyright © 2023 All rights reserved </span>
        <span>
          Simsun Electric Pvt Ltd Designed by
          <Link to="https://teksila.in/" className="text-red-400 ml-4">
            Teksila.in
          </Link>
        </span>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
