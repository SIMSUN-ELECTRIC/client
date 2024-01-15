import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../store/slices/UserSlice";
import NavLinks from "./NavLinks";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/img/logo1.jpg";

const Navbar = () => {
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

  return (
    <nav className="bg-[#161D24] text-white  w-full opacity-100 top-0 fixed m-0 z-20">
      <div className="flex items-center font-medium justify-between ">
        <div className="z-50 p-1 md:w-auto w-full flex justify-between mr-[2rem] -ml-10">
          <Link
            to="/"
            className="flex text-3xl  border md:translate-x-10  justify-center items-center ml-10   overflow-hidden font-medium mb-0 md:mb-0 mr-0 "
          >
            <div className="flext justify-start   ">
              <img src={logo} alt="" className="w-12" />
            </div>
          </Link>
          <div
            className="text-3xl md:hidden mt-3.5 z-30"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <RxCross2 className="z-50" />
            ) : (
              <IoMdMenu className="z-50" />
            )}
          </div>
        </div>
        <ul className="md:flex md:flex-row md:flex-wrap md:mt-[1rem] md:mb-[1rem] hidden items-center gap-3 font-[Poppins] mx-8">
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
            <div className="">
              <li>
                <Link
                  to="/addProduct"
                  className=" text-xl cursor-pointer text-white hover:text-red-400 font-medium mr-3.5 relative "
                >
                  Add Product
                </Link>
              </li>
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
                  className="inline-flex justify-center w-full text-xl rounded-md border border-white shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
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
                  className="inline-flex justify-center w-full text-xl rounded-md border border-white shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
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
        md:hidden bg-[#161D24] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] "}
        `}
        >
          <NavLinks />
          {user.isAuthenticated ? (
            <div className="mt-2">
              <li>
                <Link
                  to="/Cart"
                  className=" ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold relative"
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

          {user.userData?.isAdmin ? (
            <div className="mt-2">
              <li>
                <Link
                  to="/addProduct"
                  className=" ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                >
                  Add Product
                </Link>
              </li>
            </div>
          ) : null}

          {user.userData?.isEngineer ? (
            <div className="mt-2">
              <li>
                <Link
                  to="/EngineerDetails"
                  className="ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
                >
                  Engineer form
                </Link>
              </li>
            </div>
          ) : null}

          <div className="mt-2">
            <Link
              to="/shop"
              className="ml-5 cursor-pointer text-xl text-white hover:text-red-400 font-semibold "
              onClick={() => setOpen(!open)}
            >
              Shop
            </Link>
          </div>
          <div className="mt-2">
            <Link
              to="/ContactUs"
              className="ml-5 cursor-pointer text-white text-xl hover:text-red-400 font-semibold mt-7"
              onClick={() => setOpen(!open)}
            >
              Contact Us
            </Link>
          </div>
          <div className="mx-5 mt-2 relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="font-semibold flex justify-between items-center text-xl"
            >
              Login
            </button>

            {isOpen && (
              <div className="-mx-8 origin-top-right absolute right-0 mt-2 w-full rounded-md  ring-1 ring-black ring-opacity-5 focus:outline-none sm:w-56">
                <a href="/admin-login" className="dropdown-item">
                  Admin Login
                </a>
                <a href="/user-login" className="dropdown-item">
                  User Login
                </a>
                <a href="/customer-login" className="dropdown-item">
                  Customer Login
                </a>
              </div>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
