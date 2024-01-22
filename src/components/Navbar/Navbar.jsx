import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../store/slices/UserSlice";
import NavLinks from "./NavLinks";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/img/logo1.jpg";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

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

  // Calculate total quantity in the cart
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  let headerWidth = useRef();

  const handleScroll = () => {
    // console.log(headerWidth);
    if (window.scrollY >= 20) {
      headerWidth.current.classList.add("sticky");
      headerWidth.current.classList.remove("rounded-navbar");
    } else {
      headerWidth.current.classList.add("rounded-navbar");
      headerWidth.current.classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className=" hidden  ml-4 md:ml-8 gap-3 md:flex text-black-800 flex-row justify-around">
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
      </div>

      <div className=" flex items-center justify-center">
        <nav
          ref={headerWidth}
          className="bg-[#161D24] text-white md:sticky w-full h-auto opacity-100 top-0 z-10 mx-auto"
        >
          <div className="flex items-center font-medium justify-between ">
            <div className="z-50 p-1 lg:w-auto w-full flex justify-between m-4 lg:mr-8 lg:ml-0">
              <Link
                to="/"
                className="flex text-3xl  border lg:translate-x-10  justify-center items-center overflow-hidden font-medium mb-0 md:mb-0 mr-0 "
              >
                <div className="flex justify-start   ">
                  <img src={logo} alt="" className="h-12 w-12" />
                </div>
              </Link>

              <div className="flex mt-2">
                <div className="flex lg:hidden mt-0.5 md:mt-0 z-30 mx-5">
                  <div>
                    <Link
                      to="/shop"
                      className="ml-5 cursor-pointer text-md md:text-xl text-white hover:text-red-400 "
                    >
                      Shop
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      to="/ContactUs"
                      className="ml-5 cursor-pointer text-white text-md md:text-xl hover:text-red-400"
                    >
                      Contact Us
                    </Link>
                  </div>
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
                      to="/Cart"
                      className=" text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5 relative "
                    >
                      Cart
                      {cartItems.length > 0 && (
                        <span className="bg-red-500 text-white px-2 py-0 rounded-full absolute top-0 right-0 -mt-4 -mr-5">
                          {totalQuantity}
                        </span>
                      )}
                    </Link>
                  </li>
                </div>
              ) : null}

              {user.userData?.isAdmin ? (
                <div className="text-left md:cursor-pointer group ml-5">
                  <h1
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Add" ? "" : "Add"
                      );
                      setSubHeading("");
                    }}
                  >
                    Add
                    <span className="text-xl md:hidden inline">
                      {heading === "Add" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h1>
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
                <div className="text-left md:cursor-pointer group ml-5">
                  <h1
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "List" ? "" : "List"
                      );
                      setSubHeading("");
                    }}
                  >
                    List
                    <span className="text-xl md:hidden inline">
                      {heading === "List" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h1>
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
                <div className="text-left md:cursor-pointer group ml-5">
                  <h1
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Add" ? "" : "Add"
                      );
                      setSubHeading("");
                    }}
                  >
                    Users
                    <span className="text-xl md:hidden inline">
                      {heading === "Add" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h1>
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
                <div className="">
                  <li>
                    <Link
                      to="/addProduct"
                      className=" ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                      onClick={() => setOpen(!open)}
                    >
                      Add Product
                    </Link>
                  </li>
                </div>
              ) : null}

              {user.userData?.isAdmin ? (
                <div className="">
                  <li>
                    <Link
                      to="/admin/productList"
                      className=" ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                      onClick={() => setOpen(!open)}
                    >
                      List
                    </Link>
                  </li>
                </div>
              ) : null}
              {user.userData?.isAdmin ? (
                <div className="text-left md:cursor-pointer group ml-5">
                  <h1
                    className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                    onClick={() => {
                      setHeading((prevHeading) =>
                        prevHeading === "Users" ? "" : "Users"
                      );
                      setSubHeading("");
                    }}
                  >
                    Users
                    <span className="text-xl md:hidden inline">
                      {heading === "Users" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <FaAngleDown />
                    </span>
                  </h1>
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
                      className="ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                      onClick={() => setOpen(!open)}
                    >
                      Engineer form
                    </Link>
                  </li>
                </div>
              ) : null}

              <div className="">
                <Link
                  to="/shop"
                  className="ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                  onClick={() => setOpen(!open)}
                >
                  Shop
                </Link>
              </div>
              {user.isAuthenticated ? (
                <div className="">
                  <li>
                    <Link
                      to="/Cart"
                      className=" ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold relative"
                      onClick={() => setOpen(!open)}
                    >
                      Cart
                      {cartItems.length > 0 && (
                        <span className="bg-red-500 text-white px-2 py-0 rounded-full absolute top-0 right-0 -mt-0 -mr-8">
                          {totalQuantity}
                        </span>
                      )}
                    </Link>
                  </li>
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
                      onClick={toggleDropdown}
                      className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full "
                    >
                      {user.userData.userName}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={toggleDropdown}
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
                        >
                          Profile
                        </a>
                        <div
                          onClick={handleLogout}
                          className="block dropdown-item"
                        >
                          Logout
                        </div>
                      </div>
                    ) : (
                      <div className="w-96">
                        <a
                          href="/auth/consumerLogin"
                          className="block dropdown-item"
                        >
                          Customer Login
                        </a>
                        <a
                          href="/auth/EngineerLogin"
                          className="block dropdown-item"
                        >
                          Engineer Login
                        </a>
                        <a
                          href="/auth/AdminLogin"
                          className="block dropdown-item"
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
