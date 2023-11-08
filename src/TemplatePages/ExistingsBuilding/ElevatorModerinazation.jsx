import React from "react";

import BackgroundImg from "../../assets/img/lift1.jpg";
import ImgBox from "../../assets/img/lift2.jpg";

const ElevatorModerinazation = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const services = [
    {
      title: "Performance  ",
      description:
        "A modernized elevator does the job better. You will have less waiting, fewer breakdowns, and less frustration – all from your existing elevator. There will be less repairs with a new, up-to-date elevator controller unit and our cutting edge hoisting machinery, that is designed to last and save energy. You can enjoy the benefits of the renewed elevator doors and signalization, that are reliable, good looking and easy to use.",
      buttonText: "Contact an Expert",
      imageUrl: ImgBox,
    },
    {
      title: "Safety",
      description:
        "Safety is our top priority – our innovative improvements will make your equipment safer, giving you and your passengers increased peace of mind. You will benefit from safety improvements in various areas, such as; better functioning car doors, accurate landing of elevator car, improved lighting to provide better visibility and the feeling of safety, a two-way communication system inside the car, an emergency power supply in case of power cuts, and much more.",
      buttonText: "Request a quote",
      imageUrl: ImgBox,
    },
    {
      title: "Accessibility",
      description:
        "Your elevator should be safe, accessible and convenient to use for everyone in your building. Modernization can bring wider opening doors and safety features which makes entering the elevator easier - especially elderly people and families with children.",
      buttonText: "Get in touch",
      imageUrl: ImgBox,
    },
  ];
  const services2 = [
    {
      title: "Visual appearance  ",
      description:
        "A good-looking elevator complements your building and makes an elevator ride a pleasant experience. You can have your old elevator car transformed into a modern one as a part of the modernization project. Have your elevator refurbished with stylish, durable and easy to clean materials, without increasing the weight of the elevator. We provide you various, professionally designed car interiors to choose from. Alternatively, you can tweak a ready- made car design or make a design of your own, by mixing and matching materials and accessories according to your personal preference.",
      buttonText: "Contact an Expert",
      imageUrl: ImgBox,
    },
    {
      title: "Eco-efficiency",
      description:
        "Modernization can significantly improve the eco-efficiency of your elevator. We offer an energy-efficient KONE EcoDisc® motor that consumes far less energy than a geared, two-speed traction or hydraulic elevators. You can also enjoy the benefits of energy-efficient LED lighting in the car and our energy-saving drive system that recovers the excess braking energy and feeds it back into the network. We also offer stand-by mode options, where the car automatically goes into energy-saving mode, when elevator is not in use. You can both save money and reduce your carbon footprint.",
      buttonText: "Request a quote",
      imageUrl: ImgBox,
    },
   
  ];
  return (
    <>
      {/* section 1 */}
      <div className="w-full sm:h-[40rem] relative min-h-screen">
        <img
          src={BackgroundImg}
          alt="Your Image"
          className="w-full sm:max-h-[40rem] h-[45rem]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="p-4 rounded-lg shadow-lg text-center bg-transparent flex justify-center items-center md:-translate-y-44 sm:-translate-y-24 -translate-y-10">
            <div className="mx-4 sm:mx-8 lg:mx-28 w-full sm:w-[65%] ">
              <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-3xl  text-left">
                Elevator modernization
              </h1>
              <p className="text-xl sm:text-2xl text-white text-left">
                Boost your elevator’s reliability, eco-efficiency, comfort, and
                appearance – and bring it in line with the latest safety,
                aesthetics, eco-efficiency, performance, and accessibility
                standards – with our modernization solutions for all needs and
                budgets.
              </p>
            </div>
            <div className="w-0 sm:w-[55%]"></div>
          </div>
        </div>
      </div>

      {/* section 1 end */}
      <div className="mt-1 flex justify-center items-center sm:mx-10 flex-col">
        {/* section 2 start  */}
        {/* <div className="flex flex-col lg:flex-row">

          <div className="w-full lg:w-1/2 p-4">
            <form></form>
          </div>

          <div className="w-full lg:w-1/2 p-4">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="textarea1"
                  className="block font-medium text-gray-700"
                >
                  Textarea:
                </label>
                <textarea
                  id="textarea1"
                  name="textarea1"
                  className="w-full px-3 py-2 border rounded-lg"
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="checkbox1"
                  className="block font-medium text-gray-700"
                >
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    className="mr-2"
                  />{" "}
                  Checkbox
                </label>
              </div>
            </form>
          </div>
        </div> */}
        {/* section 2 end here */}

        {/* section 3 */}
        <div className="sm:mt-7 mt-32 flex flex-col  items-center w-full">
          <div className="text-left flex  w-4/5 ">
            <h2 className="text-5xl  w-full mb-10">
              Elevator modernization with SIMSUN
            </h2>
          </div>
          <div className="flex flex-wrap justify-center mt-4  w-full ">
            <div className="bg-white  p-4 rounded-lg shadow-lg sm:w-[25%] w-[90%] flex  items-start px-10 justify-around flex-col min-h-[30rem] font-semibold  mb-4 ">
              <h1 className="text-6xl text-blue-700">1</h1>
              <div className="text-2xl font-semibold">
                AN INVESTMENT THAT PAYS OFF
              </div>
              <div className="text-xl tracking-wider text-thin ">
                KONE elevator modernization improves elevator safety,
                reliability, accessibility, and appearance, while also lowering
                energy costs.
              </div>
            </div>

            <div className="bg-white  p-4 rounded-lg shadow-lg sm:w-[25%] w-[90%] flex  items-start px-10 justify-around flex-col min-h-[30rem] font-semibold mb-4  ">
              <h1 className="text-6xl text-blue-700">2</h1>
              <div className="text-2xl font-semibold">
                HAPPIER BUILDING USERS
              </div>
              <div className="text-xl tracking-wider text-thin ">
                Elevator modernization gives you a reliable, comfortable, and
                accessible elevator that improves the quality of life for
                everyone in your building.
              </div>
            </div>

            <div className="bg-white  p-4 rounded-lg shadow-lg sm:w-[25%] w-[90%] flex  items-start px-10 justify-around flex-col min-h-[30rem] font-semibold mb-4  ">
              <h1 className="text-6xl text-blue-700">3</h1>
              <div className="text-2xl font-semibold">
                HASSEL-FREE INSTALLATION
              </div>
              <div className="text-xl tracking-wider text-thin ">
                Our professionally managed elevator modernization process
                minimizes disturbance to tenants and visitors during elevator
                installation.
              </div>
            </div>
          </div>
        </div>
        {/* section 3 end */}
      </div>

      {/* section 4 start */}
      <div className="w-full sm:h-[65rem]  relative ">
      <img
        src={BackgroundImg}
        alt="Your Image"
        className="w-full sm:max-h-[55rem] h-[70rem]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center mt-12">
        <div className="p-4 rounded-lg shadow-lg text-center bg-transparent flex justify-center items-center md:-translate-y-44 sm:-translate-y-24 -translate-y-10">
          <div className="mx-4 sm:mx-8 lg:mx-28 w-full sm:w-[85%] ">
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black text-3xl text-left">
              Our elevator modernization solutions
            </h1>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 h-[20rem] border bg-white p-4 flex justify-start items-start flex-col mb-2 sm:mb-0 hover:bg-blue-300 cursor-pointer">
                <h1 className="text-3xl mt-10">Full replacement</h1>
                <div className="text-2xl mt-10 text-left">
                  A brand new elevator in the shortest time possible.
                </div>
              </div>
              <div className="w-full sm:w-1/2 h-[20rem] bg-white p-4 flex justify-start items-start flex-col hover:bg-blue-300 cursor-pointer">
                <h1 className="text-3xl mt-10">Modular modernization</h1>
                <div className="text-2xl mt-10 text-left">
                  Boost performance with smart modular modernizations.
                </div>
              </div>
            </div>
            <div className="w-full h-[15rem]  bg-white p-4 flex justify-start items-start flex-col mt-4 sm:mt-0 hover:bg-blue-300 cursor-pointer">
              <h1 className="text-3xl mt-10">Small improvements</h1>
              <div className="text-2xl mt-10 text-left">
                Small improvements that make a big difference.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* section 4 end here */}

        {/* section 5 start here */}

        <div className="mt-1 flex justify-center items-center sm:mx-10 flex-col ">

        <div className="flex items-center flex-col sm:flex-row ">
      {/* Image on the left */}
      <div className="flex-1 h-[35rem] bg-cover bg-center" >
          <img src={BackgroundImg} className="flex-1 h-full bg-cover bg-center" alt="" />
      </div>

      {/* Text on the right */}
      <div className="flex-1 p-8">
        <h2 className="text-4xl font-semibold mb-4">When to modernize?</h2>
        <ul className="list-disc text-2xl ml-6">
        <div>These simple questions help you determine when to modernize:</div>
          <li>Is your equipment more than 15 years old?</li>
          <li>Does it meet the latest safety regulations?</li>
          <li>Does it consume more energy than a modern solution?</li>
          <li>Do passengers use it with peace of mind?</li>
          <li>Is the elevator often out of order?</li>
          <li>Does your elevator look out of date?</li>
          <li>Is it difficult for some tenants to use the elevator?</li>
        </ul>
        <a href="/" className="mt-4 text-2xl text-blue-500 hover:text-blue-600 hover:underline ">
          Read more about how we can renew your elevator experience.
        </a>
      </div>
    </div>

        </div>

    {/* section 3 end    */}
    <div className="w-full mt-5  h-[20rem] flex flex-col items-center justify-around">
        <div className="text-5xl">Renew your Elevator experince</div>
        <div className="text-3xl">Easy, efficient & economical Modernization solutions for aging elevators</div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xl px-10 py-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Click here to download our Modernization brochure</button>

    </div>

    {/* section 6 end */}

    {/* section 7 start */}
    <div className="sm:mt-7 mb-6  mt-32 flex flex-col justify-center items-center w-full">
          <div className="text-left  w-full ">
            <h2 className="text-3xl sm:text-5xl font-semibold text-left  mx-6 sm:mx-16">
            Benefits of elevator modernization 
            </h2>
            <div className="border-b-2 border-blue-500 mx-auto mt-2 w-80" />
          
          </div>
          <div className="flex flex-wrap justify-center mt-4 w-full ">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white  transition-all delay-200 cursor-pointer m-4  rounded-lg  sm:w-[30%] w-[90%] flex flex-col  items-start min-h-[20rem] font-semibold "
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full object-cover  mb-4"
                />
                <h1 className="text-2xl  ml-4">{service.title}</h1>

                <p className="text-gray-600 mt-2 text-left  flex items-start justify-start">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* section 7 end */}

                {/* section 8 start  */}
                <div className="sm:mt-7 mb-6  mt-32 flex flex-col justify-center items-center w-full">
          
          <div className="flex flex-wrap justify-center mt-4 w-full mb-4">
            {services2.map((service, index) => (
              <div
                key={index}
                className="bg-white  transition-all delay-200 cursor-pointer m-4  rounded-lg  sm:w-[40%] w-[90%] flex flex-col  items-start min-h-[20rem] font-semibold "
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full object-cover  mb-4"
                />
                <h1 className="text-2xl  ml-4">{service.title}</h1>

                <p className="text-gray-600 mt-2 text-left  flex items-start justify-start">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

    </>
  );
};

export default ElevatorModerinazation;
