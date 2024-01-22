import React, { useState, useEffect } from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const Footer = () => {
  //changes the copyright dynamically
  const date = new Date().getFullYear();

  //using IntersectionObserver this hook will determine whether we should hide or show footer

  return (
    <footer
      className={`
      bg-[#161D24] text-white section `}
    >
      <div
        className={`flex justify-between items-center  sm:px-4 px-4 bg-[#ffffff19] py-4 `}
      >
        <div>
          <h1 className=" items-center text-3xl md:text-4xl md:font-bold ">
            <span className="text-red-500 ">Free</span> Subscribe Us
          </h1>
        </div>
        <div className={`sm:my-0 my-3 `}></div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto "
          >
            Submit
          </button>
        </div>
      </div>
      <div>
        <ItemsContainer />
      </div>
      <div
        className={`flex gap-10 justify-around px-5 text-xs md:text-sm text-gray-400 `}
      >
        <span>Copyright © {date}. All Rights Reserved. </span>
        <span>
          Simsun Electric Pvt Ltd Designed by
          <Link to="https://teksila.in/" className="text-red-400 ml-1">
            Teksila.in
          </Link>
        </span>
      </div>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
