import React from "react";
import Esc from "../../assets/img/escalator1.jpg";
import lift1 from "../../assets/img/lift1.jpg";
import lift4 from "../../assets/img/lift4.jpg";
import lift5 from "../../assets/img/lift5.jpg";
import lift7 from "../../assets/img/lift7.jpg";
import lift15 from "../../assets/img/lift15.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Homepage = () => {
  const state = useSelector(state => state.user);
  console.log("from here")
  console.log(state)

  return (
    <>
      <div className=" h-[28rem]  sm:h-[28rem] sm:flex ">
        <div className=" w-full flex flex-col bg-[#202b35] items-center justify-center p-10 bg-cover" style={{ backgroundImage: `url(${lift15})`, }}>
          <div className="sm:text-5xl text-white  text-3xl text-center uppercase font-bold sm:mb-10 mt-24 sm:mt-0">
            Welcome to Simsun Electric
          </div>
          <div className=" sm:text-2xl text-sm mt-5 sm:mt-0 text-center  text-white drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-[#202b35]">
            We Believe this is the key of any successful relationship and it's
            important to us that our clients and team members have a strong
            foundation trust in each other.
          </div>
          <Link to='/about/ourcompany' className="bg-[#D7ADAE] mt-10 hover:bg-red-400 text-black font-bold py-2 px-4 rounded-full">
            Explore Now!
          </Link>
        </div>

      </div>


      <div className="w-full flex flex-col text-center mt-6">
        <h1 className="text-black font-bold text-5xl">About Simsun</h1>
        <p className="text-black text-xl">
          The birth of SimSun Electric was founded in December 2016 after 2
          years of elevator and escalator project installation experience{" "}
          all over the Rajasthan. The possibilities of SimSun Electric
          were built after left DMRC project in Dec 2014, and started work
          with a small franchise of
          elevator and escalator energy in Jaipur.
        </p>
        <p className=" text-black text-xl">
          At there we found that everybody is moving on MW and large scale
          projects, that time we keep our focus to learning the Elevator and
          Escalator project work. We were started our work as a freelancer in the
          industry by small works with different franchises in roof top
          Backup, or net metering Projects. And after all when we found that Elevator and Escalator roof
          top market in Rajasthan rapidly growing, then our ideas come into the reality and founded SimSun
          Electric Dec 2016.
        </p>
      </div>



      <div className="w-full text-center flex flex-col ">
        <h1 className="text-black text-4xl font-bold ">WHY CHOOSE US</h1>
        <div className="flex flex-row mt-6 justify-center md:flex-nowrap flex-wrap">
          <div className=" flex flex-col m-4  p-4  hover:bg-[#202b35] group hover:scale-90 ease-in duration-500 hover:rounded-2xl">
            <div className="flex justify-center group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>

            <h2 className="text-black text-2xl font-bold group-hover:text-white">Wide Range of Products</h2>
            <p className="text-black text-xl group-hover:text-white">
              Explore our extensive selection of electronics, including
              smartphones, laptops, smart home devices, gaming consoles, and
              more.
            </p>
          </div>
          <div className="flex flex-col p-4 hover:bg-[#202b35] group hover:scale-90 ease-in duration-500 hover:rounded-2xl">
            <div className=" flex justify-center group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>

            <h2 className="text-black text-2xl font-bold group-hover:text-white">Quality Assurance</h2>
            <p className="text-black text-xl group-hover:text-white">
              We believe in delivering only the highest quality products from
              trusted brands. Our team carefully selects each item in our
              catalog to ensure reliability and performance.
            </p>
          </div>
          <div className="flex flex-col p-4 hover:bg-[#202b35] group hover:scale-90 ease-in duration-500 hover:rounded-2xl">
            <div className="flex justify-center group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>

            <h2 className="text-black text-2xl font-bold group-hover:text-white">Competitive Pricing</h2>
            <p className="text-black text-xl group-hover:text-white">
              We offer competitive prices to ensure you get the best value for
              your money. Plus, don't miss out on our exclusive deals and
              promotions.
            </p>
          </div>
          <div className="flex flex-col p-4 hover:bg-[#202b35] group hover:scale-90 ease-in duration-500 hover:rounded-2xl">
            <div className="flex justify-center group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>

            <h2 className="text-black text-2xl font-bold group-hover:text-white">Secure Shopping</h2>
            <p className="text-black text-xl group-hover:text-white">
              Shop with confidence knowing that your data is protected with
              state-of-the-art security measures. Your privacy and security
              are our top priorities.
            </p>
          </div>
        </div>
      </div>


        <section className="w-full flex mt-[2rem] bg-[#202b35]  p-8">
          <div className="w-[45%] flex justify-center">
            <img src={Esc} width="" className=" hover:scale-110 ease-linear duration-500" />
          </div>
          <div className="flex w-[52%] ">
            <p className=" text-white text-xl">
              At there we found that everybody is moving on MW and large scale
              projects, that time we keep our focus to learning the Elevator and
              Escalator project work. We were started our work as a freelancer
              in the industry by small works with different franchises in roof
              top Backup, or net metering Projects. And after all when we found
              that Elevator and Escalator roof top market in Rajasthan rapidly
              growing, then our ideas come into the reality and founded SimSun
              Electric Dec 2016.
            </p>
          </div>
        </section>

      <div>
        <div className="mt-5 w-full">
          <h2 className="title text-3xl">Our Products</h2>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/4 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer">
              <Link to="/product/lift">
                <img src={lift1} alt="Lift" className="w-full rounded-md" />
                <h4 className="text-2xl mt-2 text-center ">Lift</h4>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer">
              <Link to="/product/esclator">
                <img src={lift7} alt="Escalator" className="w-full rounded-md" />
                <h4 className="text-2xl mt-2 text-center ">Escalator</h4>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer">
              <Link to="/product/LiftSparePart">
                <img src={lift5} alt="Lift Spare Part" className="w-full rounded-md" />
                <h4 className="text-2xl mt-2 text-center ">Lift Spare Part</h4>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer">
              <Link to="/product/EsclatorSparePart">
                <img src={lift4} alt="Escalator Spare Part" className="w-full rounded-md " />
                <h4 className="text-2xl mt-2 text-center ">Escalator Spare Part</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-red-500">
  All copyright reserved
</div> */}

    </>
  );
};

export default Homepage;
