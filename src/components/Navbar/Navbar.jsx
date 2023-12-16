import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/img/logo1.jpg";
import NavLinks from "./NavLinks";
import { IonIcon } from '@ionic/react';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#161D24] text-white ">
      <div className="flex items-center font-medium justify-evenly ">
        <div className="z-50 p-1 md:w-auto w-full flex justify-between mr-[2rem]">
          <Link
            to="/"
            class="flex text-3xl text-white border md:translate-x-10  justify-center items-center border-red-400 rounded-full overflow-hidden font-medium mb-0 md:mb-0 mr-0 "
          >
            <div className=" rounded-full  ">
              <img src={logo1} alt="" className="w-16" />

            </div>
          </Link>
          <div className="text-3xl md:hidden mt-3.5 " onClick={() => setOpen(!open)}>
           
            {
              open ? <RxCross2 /> : <IoMdMenu />
            }
            
          </div>
        </div>
        <ul className="md:flex md:flex-row md:flex-wrap md:mt-[2rem] md:mb-[2rem] hidden items-center gap-3 font-[Poppins]">
          <NavLinks />
          <div className="">
            <li>
              <Link to="/ContactUs" class=" hover:text-red-400 text-xl cursor-pointer text-gray-300   font-xl mr-3.5">
                Contact Us
              </Link>
            </li>
          </div>
          <div className="">
            <li>
              <Link to="/shop" class=" text-xl cursor-pointer text-gray-300 hover:text-red-400 font-medium mr-3.5">
                Shop
              </Link>
            </li>
          </div>
          <div className="">
            <li>
              <Link to="/Cart" class=" text-xl cursor-pointer  text-gray-300 hover:text-red-400 font-medium mr-3.5">
                Cart
              </Link>
            </li>
          </div>
        </ul>


        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#161D24] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] "}
        `}
        >
          <NavLinks />
          <div className="mt-5">

            <li>
              <Link to="/ContactUs" class="mr-5 cursor-pointer text-gray-300 text-xl hover:text-red-400 font-semibold mt-7">
                Contact Us
              </Link>
            </li>
          </div>
          <div className="mt-5">
            <Link to="/Cart" class="mr-5 cursor-pointer text-xl text-gray-300 hover:text-red-400 font-semibold ">
              Cart
            </Link>
          </div>
          <div className="mt-5">
            <Link to="/shop" class="mr-5 cursor-pointer text-xl text-gray-300 hover:text-red-400 font-semibold ">
              Shop
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
