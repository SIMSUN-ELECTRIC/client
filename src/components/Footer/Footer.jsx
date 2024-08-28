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
          {/* <Link to="https://teksila.in/" className="text-red-400 ml-1">
            Teksila.in
          </Link> */}
          <span className="text-blue-700 font-bold cursor-pointer">
            <a href="tel:7970693331" target="_blank" rel="noopener noreferrer">
              Tanmay and Team
            </a>
          </span>
        </span>
      </div>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
