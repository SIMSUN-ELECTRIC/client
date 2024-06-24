import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Feedback from "./Feedback";

const Footer = () => {
  const state = useSelector((state) => state.user);
  //changes the copyright dynamically
  const date = new Date().getFullYear();

  //using IntersectionObserver this hook will determine whether we should hide or show footer

  return (
    <footer
      className={`
      bg-[#161D24] text-white section `}
    >
      <h1 className="text-white justify-center align-center  md:flex text-2xl bg-[#0017] rounded-lg p-4">
        <span className="text-[#bc9556]">SIMSUN ELECTRIC </span>- Work is
        Workship
      </h1>
      {/* <div
        className={`flex justify-between items-center  sm:px-4 px-4 bg-[#ffffff19] py-4 `}
        >
        <div>
        <h1 className=" items-center text-md sm:text-3xl md:font-bold ">
            <span className="text-red-500 ">Free</span> Subscribe Us
          </h1>
        </div>
        <div className={`sm:my-0 my-3 `}></div>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800
           w-28 sm:w-72 mr-1 lg:mb-0 py-2.5 text-sm sm:text-lg rounded px-2 focus:outline-none"
          />
          <div className="flex items-center">
            <button className="bg-red-500 hover:bg-red-600 duration-300 rounded-md font-[Poppins] h-10 text-white w-16 text-lg ">
            Submit
            </button>
            </div>
            </div>
          </div> */}
      {state.userData?.isAdmin ? null : (
        <div>
          <Feedback />
          <ItemsContainer />
        </div>
      )}

      <div
        className={`flex gap-10 justify-around px-5 text-xs md:text-sm text-gray-400 mt-4`}
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
