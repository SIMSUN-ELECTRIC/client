import Esc from "../../assets/img/escalator1.jpg";
import esc1 from "../../assets/img/esc1.jpg";
import lift1 from "../../assets/img/lift1.jpg";
import lift4 from "../../assets/img/lift4.jpg";
import lift5 from "../../assets/img/lift5.jpg";
import lift7 from "../../assets/img/lift7.jpg";
import lift9 from "../../assets/img/lift9.jpg";
import lift13 from "../../assets/img/lift13.jpeg";
import lift14 from "../../assets/img/lift14.jpg";
import lift15 from "../../assets/img/lift15.jpg";
import home from "../../assets/img/home-bg.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Homepage = () => {
  const state = useSelector((state) => state.user);
  console.log("from here");
  console.log(state);

  const [index, setIndex] = useState(0);
  const images = [lift15, lift13, lift14, Esc];
  const mainImages = [esc1, home];
  const [mainindex, setmainIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setmainIndex((prev) => (prev + 1) % mainImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const ImageComponent = images[index];
  const mainImage = mainImages[mainindex];

  return (
    <>
      <div className=" flex flex-col items-center  w-full h-auto">
        <div
          style={{
            "--image-url": `url(${mainImage})`,
          }}
          className=" w-full h-screen relative bg-[image:var(--image-url)] transition-transform duration-3000 bg-cover  bg-[50%_50%] mr-0 flex flex-col items-center "
        >
          <div
            className={`${
              mainImage === esc1
                ? " bg-black/60 w-100% text-violet-100 "
                : "text-white"
            } w-full h-full`}
          >
            <div className="relative mt-[10rem] md:mt-[14rem] [font-family:'Poppins-SemiBold',Helvetica] font-semibold  text-3xl md:text-4xl text-center tracking-[0] leading-[normal] mx-8 mb-8">
              WELCOME TO <p className="md:inline">SIMSUN ELECTRIC</p>
            </div>
            <div className="relative [font-family:'Poppins-Regular',Helvetica] font-extralight text-xl md:text-2xl text-center tracking-[0] leading-[normal] self-stretch mx-[3.375rem] p-4">
              <p className="mt-2 w-full text-xl md:text-3xl font-bold">
                ELEVATOR AND ESCALATOR PARTS
              </p>
              <p className="mt-2 w-full">X</p>
              <p className="mt-2 w-full">Production and Sales</p>
              <p className="mt-2 w-full">Technology One-Stop Services</p>
              {/* <p>
              We believe this is the key to any successful relationship, and
              it's important to us that our clients and team members have a
              strong foundation of trust in each other.
            </p> */}
            </div>
            <div className="flex justify-center">
              <Link
                to="/about/ourcompany"
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-red-500 hover:to-pink-600 mt-10 py-3 px-6 text-white font-bold rounded-full border-2 border-transparent hover:border-transparent hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg "
              >
                Explore Now!
              </Link>
            </div>
          </div>
        </div>
        <div className="relative mt-[6.25rem] p-4 md:p-8 w-[80vw] h-auto md:h-auto bg-[#202b35] rounded-[40px]  flex flex-col lg:flex-row items-center lg:place-items-start ">
          <div className=" md:w-[90%] h-[320px] md:h-[420px] pt-2 md:p-4 flex flex-col items-center justify-around md:justify-between">
            <img
              src={ImageComponent}
              alt="lift"
              className="rounded-[25px] shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] h-[80%] md:h-[90%] w-full"
            />
            <div className="flex flex-col justify-between w-full h-[7%]">
              <div className="h-[8px]  relative w-full bg-gray-400 rounded-[50px] shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]" />
              <div className="h-[4px] relative w-full bg-gray-400 rounded-[50px] shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]" />
              <div className="relative w-full h-[2px] bg-gray-400 rounded-[50px] shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]" />
              <div className="relative w-full h-[2px] bg-gray-400 rounded-[50px] shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a]" />
            </div>
          </div>
          <div className="flex flex-col px-2 md:px-5">
            <h1 className="relative mt-[2rem] md:mt-[1.25rem]  [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[30px] md:text-[48px] tracking-[0] leading-[20px] md:leading-[48px] whitespace-nowrap">
              About Simsun
            </h1>
            <p className="relative mt-3 self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-white  text-[12px] md:text-[19.8px] tracking-[0] leading-[20px] md:leading-[28px]">
              The birth of Simsun Electric was founded in December 2016 after 2
              years of elevator and escalator project installation experience
              all over Rajasthan. The possibilities of SimSun Electric were
              built after leaving the DMRC project in Dec 2014 and started
              working with a small franchise of elevator and escalator energy in
              Jaipur.
            </p>
            <p className="relative mt-3 self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[12px] md:text-[19.8px] tracking-[0] leading-[20px] md:leading-[28px]">
              At that time, we found that everybody is moving on MW and
              large-scale projects. We kept our focus on learning about elevator
              and escalator project work. We started our work as freelancers in
              the industry by doing small works with different franchises in
              rooftop backup or net metering projects. When we observed that the
              elevator and escalator rooftop market in Rajasthan was rapidly
              growing, our ideas became a reality, and Simsun Electric was
              founded in Dec 2016.
            </p>
          </div>
        </div>

        <div className="w-full text-center flex flex-col mt-12">
          <h1 className="text-black text-4xl font-bold">WHY CHOOSE US</h1>
          <div className="flex flex-row mt-4 justify-center md:flex-nowrap flex-wrap mx-8">
            <div className="flex flex-col cursor-pointer m-4 p-4 bg-[#202b35] text-white rounded-2xl group hover:scale-90 ease-in duration-500 hover:rounded-2xl">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold">Wide Range of Products</h2>
              <p className="text-md mt-2">
                Explore our extensive selection of electronics, including
                smartphones, laptops, smart home devices, gaming consoles, and
                more.
              </p>
            </div>
            <div className="flex flex-col cursor-pointer m-4 p-4 bg-[#202b35] rounded-2xl group hover:scale-90 ease-in duration-500 hover:rounded-2xl">
              <div className=" flex justify-center text-white">
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

              <h2 className=" text-2xl font-semibold text-white">
                Quality Assurance
              </h2>
              <p className="text-md text-white mt-2">
                We believe in delivering only the highest quality products from
                trusted brands. Our team carefully selects each item in our
                catalog to ensure reliability and performance.
              </p>
            </div>
            <div className="flex flex-col cursor-pointer m-4 p-4 bg-[#202b35] rounded-2xl group hover:scale-90 ease-in duration-500 hover:rounded-2xl">
              <div className=" flex justify-center text-white">
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

              <h2 className=" text-2xl font-semibold text-white">
                Competitive Pricing
              </h2>
              <p className=" text-md text-white mt-2">
                We offer competitive prices to ensure you get the best value for
                your money. Plus, don't miss out on our exclusive deals and
                promotions.
              </p>
            </div>
            <div className="flex flex-col cursor-pointer m-4 p-4 bg-[#202b35] rounded-2xl group hover:scale-90 ease-in duration-500 hover:rounded-2xl">
              <div className=" flex justify-center text-white">
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

              <h2 className=" text-2xl font-semibold text-white">
                Secure Shopping
              </h2>
              <p className=" text-md text-white mt-2">
                Shop with confidence knowing that your data is protected with
                state-of-the-art security measures. Your privacy and security
                are our top priorities.
              </p>
            </div>
          </div>
        </div>

        <section className="w-full flex flex-col-reverse md:flex-row mt-[2rem] bg-[#202b35] p-8 mb-10">
          <div className="flex md:w-[45%] justify-center order-2 md:order-1">
            <img src={Esc} alt="Your Alt Text" />
          </div>
          <div className="flex md:w-[52%] order-1 md:order-2 mt-4 md:mt-0">
            <p className="text-white text-sm md:text-xl [font-family:'Poppins-Regular',Helvetica] font-normal">
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
        <div className="mt-12 w-full ">
          <h2 className="title text-4xl font-bold mx-4">Our Products</h2>
          <div className="flex flex-wrap mt-4">
            <div className="w-1/2 md:w-1/5 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer">
              <Link to="/product/lift">
                <img
                  src={lift1}
                  alt="Lift"
                  className=" sm:w-full rounded-md lg:max-h-full"
                />
                <h4 className="text-2xl mt-2 text-center">Lift</h4>
              </Link>
            </div>
            <div className="w-1/2 md:w-1/5 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer">
              <Link to="/product/escalator">
                <img
                  src={lift7}
                  alt="Escalator"
                  className="w-full rounded-md"
                />
                <h4 className="text-2xl mt-2 text-center ">Escalator</h4>
              </Link>
            </div>
            <div className="w-1/2 md:w-1/5 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer">
              <Link to="/product/travelator">
                <img
                  src={lift9}
                  alt="travelator"
                  className="w-full rounded-md"
                />
                <h4 className="text-2xl mt-2 text-center ">Travelator</h4>
              </Link>
            </div>
            <div className="w-1/2 md:w-1/5 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer">
              <Link to="/product/LiftSparePart">
                <img
                  src={lift5}
                  alt="Lift Spare Part"
                  className="w-full rounded-md"
                />
                <h4 className="text-2xl mt-2 text-center ">Lift Spare Part</h4>
              </Link>
            </div>
            <div className="w-1/2 md:w-1/5 p-4 hover:-translate-y-2 ease-in duration-300 cursor-pointer">
              <Link to="/product/EscalatorSparePart">
                <img
                  src={lift4}
                  alt="Escalator Spare Part"
                  className="w-full rounded-md "
                />
                <h4 className="text-2xl mt-2 text-center ">
                  Escalator Spare Part
                </h4>
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
