import React from "react";
import "./Homepage.css";
import Esc from "../../assets/img/escalator1.jpg";
import lift1 from "../../assets/img/lift1.jpg";
import lift4 from "../../assets/img/lift4.jpg";
import lift5 from "../../assets/img/lift5.jpg";
import lift7 from "../../assets/img/lift7.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Homepage = () => {
  const state = useSelector(state => state.user);
  console.log("from here")
  console.log(state)

  return (
    <>
      <div className=" h-[28rem]  sm:h-[28rem] sm:flex">
         <div className="   w-full flex flex-col bg-[#202b35] items-center justify-center p-10">
            <div className="sm:text-5xl text-white  text-3xl text-center uppercase font-bold sm:mb-10 mt-24 sm:mt-0">
              Welcome to Simsun Electric
            </div>
            <div className="text-white sm:text-2xl text-sm mt-5 sm:mt-0 text-center   ">
              We Believe this is the key of any successful relationship and it's
              important to us that our clients and team members have a strong
              foundation trust in each other.
            </div>
            <Link to='/about/ourcompany' className="bg-[#D7ADAE] mt-10 hover:bg-red-400 text-black font-bold py-2 px-4 rounded-full">
              Explore Now!
            </Link>
          </div>
        
      </div>

      <div className="">
        <div className="heading ">
          <h1 className="font-bold">About Simsun</h1>
          <p className="text-xl sm:text-center text-left text-red">
            The birth of SimSun Electric was founded in December 2016 after 2
            years of elevator and escalator project installation experience{" "}
             all over the Rajasthan. The possibilities of SimSun Electric
            were built after left DMRC project in Dec 2014, and started work
            with a small franchise of 
            elevator and escalator energy in Jaipur.
          </p>
          <p className="text-2xl sm:text-center text-left">
            At there we found that everybody is moving on MW and large scale
            projects, that time we keep our focus to learning the Elevator and
            Escalator project work. We were started our work as a freelancer in the
            industry by small works with different franchises in roof top
            Backup, or net metering Projects. And after all when we found that Elevator and Escalator roof
            top market in Rajasthan rapidly growing, then our ideas come into the reality and founded SimSun
            Electric Dec 2016.
          </p>
        </div>
      </div>

      <div className="mb-2  flex flex-col ">
        <div className="whychoose  ">
          <h1 className="text-3xl sm:text-4xl ">WHY CHOOSE US</h1>
          <div className="flex flex-col sm:flex-row ">
            <div className="serv text-black">
              <div className=" flex justify-center items-center">
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

              <h2 className="font-bold text-3xl">Wide Range of Products</h2>
              <p className="text-xl text-black">
                Explore our extensive selection of electronics, including
                smartphones, laptops, smart home devices, gaming consoles, and
                more.
              </p>
            </div>
            <div className="serv">
              <div className=" flex justify-center items-center">
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

              <h2 className="font-bold text-3xl">Quality Assurance</h2>
              <p className="text-xl  text-black">
                We believe in delivering only the highest quality products from
                trusted brands. Our team carefully selects each item in our
                catalog to ensure reliability and performance.
              </p>
            </div>
            <div className="serv">
              <div className=" flex justify-center items-center">
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

              <h2 className="font-bold text-3xl">Competitive Pricing</h2>
              <p className="text-xl  text-black">
                We offer competitive prices to ensure you get the best value for
                your money. Plus, don't miss out on our exclusive deals and
                promotions.
              </p>
            </div>
            <div className="serv">
              <div className=" flex justify-center items-center">
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

              <h2 className="font-bold text-3xl">Secure Shopping</h2>
              <p className="text-xl  text-black">
                Shop with confidence knowing that your data is protected with
                state-of-the-art security measures. Your privacy and security
                are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container1">
        <section className="about">
          <div className="about-image">
            <img src={Esc} width="600px" />
          </div>
          <div className="about-content text-2xl">
            <p className="text-2xl text-white">
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
      </div>

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
