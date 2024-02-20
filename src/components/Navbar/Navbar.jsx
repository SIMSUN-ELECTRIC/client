import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../store/slices/UserSlice";
import NavLinks from "./NavLinks";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/img/logo1.jpg";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const [heading, setHeading] = useState("");

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  // console.log("user:", user.userData.userName);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  // Use useSelector to get the cart items from Redux state
  const cartItems = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);

  console.log("cart items", cartItems);
  console.log("cart length ", cart.length);

  // Calculate total quantity in the cart
  const totalQuantity = cart.length;

  let headerWidth = useRef();

  return (
    <header>
      {/* <div className=" hidden  ml-4 md:ml-8 gap-3 md:flex text-black-800 flex-row justify-around">
        <p className="head-wel justify-start  hover:text-red-400">
          Simsun Electric Pvt Ltd
        </p>
        <p className=" hover:text-red-400">
          Call Us: <a href="tel:+007 9089 6767">+007 9089 6767</a>
        </p>
        <p className=" hover:text-red-400">
          E-mail:{" "}
          <a href="mailto:simsunelectricwork@gmail.com" id="T9">
            simsunelectricwork@gmail.com
          </a>
        </p>
      </div> */}

      <div className=" z-40 flex items-center justify-center fixed w-full ">
        <nav
          ref={headerWidth}
          className="bg-[#161D24] text-white sticky w-full h-auto opacity-100 top-0 z-10 mx-auto"
        >
          <div className="flex items-center font-medium justify-between ">
            <div className="z-50 p-1 lg:w-auto w-full flex justify-between m-4 lg:mr-8 lg:ml-0 ">
              <Link
                to="/"
                className="flex text-3xl  border lg:translate-x-10  justify-center items-center overflow-hidden font-medium mb-0 md:mb-0 mr-0 "
              >
                <div className="flex justify-start   ">
                  <img src={logo} alt="logo img" className="h-12 w-12" />
                </div>
              </Link>

              <div className="flex">
                <div className="flex items-center gap-6 lg:hidden mt-0.5 md:mt-0 z-30 mx-5">
                  <div className="text-2xl lg:hidden z-30">
                    <Link to="/shop">
                      <HiOutlineShoppingBag className="z-50" />
                    </Link>
                  </div>

                  <div className="">
                    {user.isAuthenticated ? (
                      <div className="">
                        <Link to="/Cart">
                          <div className="flex gap-1">
                            <HiOutlineShoppingCart className="z-5 text-2xl lg:hidden " />

                            {/* <div>
                              {cartItems.length > 0 && (
                                <span className="bg-red-500 w-4 text-white px-1 py-0 rounded-full align-top ">
                                  {totalQuantity}
                                  
                                </span>
                              )}
                            </div> */}
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <div className="text-2xl lg:hidden z-30">
                        <Link to="/auth/consumerLogin">
                          <HiOutlineShoppingCart className="z-50" />
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className="text-3xl lg:hidden z-30"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? (
                      <RxCross2 className="z-50" />
                    ) : (
                      <IoMdMenu className="z-50" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <ul className="hidden lg:flex lg:flex-row lg:flex-wrap lg:mt-[1rem] lg:mb-[1rem] items-center gap-3 font-[Poppins] mx-8">
              <div className="">
                <li>
                  <Link
                    to="/"
                    className="ml-2 text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5"
                  >
                    Home
                  </Link>
                </li>
              </div>
              <NavLinks />
              <div className="">
                <li>
                  <Link
                    to="/shop"
                    className="ml-2 text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5"
                  >
                    Shop
                  </Link>
                </li>
              </div>
              {user.isAuthenticated ? (
                <div className="">
                  <li>
                    <Link
                      to="/Inquiry"
                      className=" text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5 relative "
                    >
                      Inquiry
                      {/* {cartItems.length > 0 && (
                        <span className="bg-red-500 text-white px-2 py-0 rounded-full absolute top-0 right-0 -mt-4 -mr-5">
                          {totalQuantity}
                        </span>
                      )} */}
                    </Link>
                  </li>
                </div>
              ) : null}

              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Add" ? "" : "Add"
                      );
                    }}
                  >
                    Add
                    <span className="text-xl md:hidden inline">
                      {heading === "Add" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                      <div className="py-0">
                        <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                      </div>
                      <div className="bg-[#161D24] p-4 flex rounded-xl -mr-20">
                        <div>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/addProduct"
                              className="block hover:text-red-400"
                            >
                              Add Product
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/addnews"
                              className="block hover:text-red-400"
                            >
                              Add News
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              ) : null}
              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "List" ? "" : "List"
                      );
                    }}
                  >
                    List
                    <span className="text-xl md:hidden inline">
                      {heading === "List" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                      <div className="py-0">
                        <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                      </div>
                      <div className="bg-[#161D24] p-4 flex rounded-xl -mr-20">
                        <div>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/productList"
                              className="hover:text-red-400"
                            >
                              Product List
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/newsList"
                              className="hover:text-red-400"
                            >
                              News List
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/feedback"
                              className="hover:text-red-400"
                            >
                              Feedback List
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              ) : null}
              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Users" ? "" : "Users"
                      );
                    }}
                  >
                    Users
                    <span className="text-xl md:hidden inline">
                      {heading === "Add" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                      <div className="py-0">
                        <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                      </div>
                      <div className="bg-[#161D24] p-4 flex rounded-xl -mr-20">
                        <div>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/UsersList"
                              className="block hover:text-red-400"
                            >
                              Customers
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/EngineerList"
                              className="block hover:text-red-400"
                            >
                              Engineers
                            </Link>
                          </li>
                          <li className="py-2 flex flex-direction-col">
                            <Link
                              to="/admin/EnginnerReview"
                              className="block hover:text-red-400"
                            >
                              Engineers Request
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              ) : null}
              {user.userData?.isEngineer ? (
                <div className="">
                  <li>
                    <Link
                      to="/EngineerDetails"
                      className=" text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5 relative "
                    >
                      Engineer form
                    </Link>
                  </li>
                </div>
              ) : null}
              <div className="">
                <li>
                  <Link
                    to="/ContactUs"
                    className=" hover:text-red-400 text-xl cursor-pointer text-white   font-xl mr-3.5"
                  >
                    Contact Us
                  </Link>
                </li>
              </div>
              <div className="relative inline-block text-left">
                {user.isAuthenticated ? (
                  <div>
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={toggleDropdown}
                    >
                      {user.userData.userName}
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full "
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={toggleDropdown}
                    >
                      Login
                    </button>
                  </div>
                )}

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#161D24] ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {user.isAuthenticated ? (
                      <>
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <a
                            href="/auth/UserProfile"
                            className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl mx-4"
                            role="menuitem"
                          >
                            Profile
                          </a>
                          <a
                            href="/prevInquiry"
                            className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl mx-4"
                            role="menuitem"
                          >
                            Previous Inquiry
                          </a>

                          <div
                            className="dropdown-item block hover:text-red-400 text-xl cursor-pointer text-white font-xl mx-4"
                            onClick={handleLogout}
                            role="menuitem"
                          >
                            Logout
                          </div>
                        </div>
                      </>
                    ) : (
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <a
                          href="/auth/consumerLogin"
                          className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl mx-4"
                          role="menuitem"
                        >
                          Customer Login
                        </a>
                        <a
                          href="/auth/EngineerLogin"
                          className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl mx-4"
                          role="menuitem"
                        >
                          Engineer Login
                        </a>
                        <a
                          href="/auth/AdminLogin"
                          className="block hover:text-red-400 text-xl cursor-pointer text-white font-xl mx-4"
                          role="menuitem"
                        >
                          Admin Login
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </ul>

            {/* Mobile nav */}
            <ul
              className={`z-20 
        lg:hidden bg-[#161D24] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] "}
        `}
            >
              <div className="">
                <Link
                  to="/"
                  className="ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                  onClick={() => setOpen(!open)}
                >
                  Home
                </Link>
              </div>

              <NavLinks />

              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Add" ? "" : "Add"
                      );
                    }}
                  >
                    Add
                    <span className="text-xl md:hidden inline">
                      {heading === "Add" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div
                      className={`${
                        heading === "Add" ? "md:hidden" : "hidden"
                      }`}
                    >
                      <div>
                        <h2 className="font-semibold md:pr-0 pr-5 flex justify-between items-center">
                          <ul className="pl-4">
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/addProduct"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Add Product
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/addnews"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Add News
                              </Link>
                            </li>
                          </ul>
                        </h2>
                      </div>
                    </div>
                  }
                </div>
              ) : null}

              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "List" ? "" : "List"
                      );
                    }}
                  >
                    List
                    <span className="text-xl md:hidden inline">
                      {heading === "List" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div
                      className={`${
                        heading === "List" ? "md:hidden" : "hidden"
                      }`}
                    >
                      <div>
                        <h2 className="font-semibold md:pr-0 pr-5 flex justify-between items-center">
                          <ul className="pl-4">
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/productList"
                                className="hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Product List
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/newsList"
                                className="hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                News List
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/feedback"
                                className="hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Feedback List
                              </Link>
                            </li>
                          </ul>
                        </h2>
                      </div>
                    </div>
                  }
                </div>
              ) : null}
              {user.userData?.isAdmin ? (
                <div className="text-left cursor-pointer group ml-5">
                  <h2
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Users" ? "" : "Users"
                      );
                    }}
                  >
                    Users
                    <span className="text-xl md:hidden inline">
                      {heading === "Users" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h2>
                  {
                    <div
                      className={`${
                        heading === "Users" ? "md:hidden" : "hidden"
                      }`}
                    >
                      <div>
                        <h2 className="font-semibold md:pr-0 pr-5 flex justify-between items-center">
                          <ul className="pl-4">
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/UsersList"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Customers
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/EngineerList"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Engineers
                              </Link>
                            </li>
                            <li className="py-2 flex flex-direction-col">
                              <Link
                                to="/admin/EnginnerReview"
                                className="block hover:text-red-400"
                                onClick={() => setOpen(!open)}
                              >
                                Engineers Request
                              </Link>
                            </li>
                          </ul>
                        </h2>
                      </div>
                    </div>
                  }
                </div>
              ) : null}

              <div className="">
                <Link
                  to="/ContactUs"
                  className="ml-5 cursor-pointer text-white text-xl hover:text-red-400 font-semibold mt-7"
                  onClick={() => setOpen(!open)}
                >
                  Contact Us
                </Link>
              </div>
              <div className="mx-5 mt-2 relative inline-block text-left">
                {user.isAuthenticated ? (
                  <div>
                    <button
                      onClick={() => {
                        toggleDropdown();
                      }}
                      className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full "
                    >
                      {user.userData.userName}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      toggleDropdown();
                    }}
                    className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full "
                  >
                    Login
                  </button>
                )}

                {isOpen && (
                  <div className="-mx-6 origin-top-right absolute right-0  w-full rounded-md  ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {user.isAuthenticated ? (
                      <div>
                        <a
                          href="/auth/UserProfile"
                          className="block dropdown-item"
                          onClick={() => setOpen(!open)}
                        >
                          Profile
                        </a>
                        <a
                          href="/prevInquiry"
                          className="block w-96 dropdown-item"
                          onClick={() => setOpen(!open)}
                        >
                          Previous Inquiry
                        </a>
                        <div
                          className="block dropdown-item"
                          onClick={() => {
                            handleLogout();
                            setOpen(!open);
                          }}
                        >
                          Logout
                        </div>
                      </div>
                    ) : (
                      <div className="w-96">
                        <a
                          href="/auth/consumerLogin"
                          className="block dropdown-item"
                          onClick={() => setOpen(!open)}
                        >
                          Customer Login
                        </a>
                        <a
                          href="/auth/EngineerLogin"
                          className="block dropdown-item"
                          onClick={() => setOpen(!open)}
                        >
                          Engineer Login
                        </a>
                        <a
                          href="/auth/AdminLogin"
                          className="block dropdown-item"
                          onClick={() => setOpen(!open)}
                        >
                          Admin Login
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
