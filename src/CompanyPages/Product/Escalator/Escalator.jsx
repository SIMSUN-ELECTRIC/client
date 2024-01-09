// import React from "react";

// import useSWR, { mutate } from "swr";
// import axios from "axios";

// import lift1 from "../../../assets/img/lift1.jpg";

// const Escalator = () => {
//   const fetcher = async (...args) => {
//     const res = await axios.get(...args);
//     console.log(res?.data?.result);
//     return res?.data?.result;
//   };

//   const { data, error, isLoading } = useSWR(
//     "https://shy-ruby-gosling-sari.cyclic.app/api/product/Escalator",
//     fetcher
//   );
//   return (
//     <>
//       <div className="   ">
//         <h1
//           style={{ textAlign: "center", fontWeight: "bolder" }}
//           className="mt-16"
//         >
//           <strong className="text-3xl mt-4">Escalators</strong>
//         </h1>
//         <div className="h-[500px]"></div>
//         <div className="row  flex sm:flex-row flex-col ">
//           {data?.map((item) => {
//             return (
//               <>
//                 <div className="col-4  bg-[#f2f2f2]  gap-2">
//                   <img src={item?.imageUrl || lift1} className="rounded-md" />
//                   <h4 className="text-3xl font-semibold">{item?.name}</h4>
//                   <div className="rating">
//                     <i className="fa fa-star" />
//                     <i className="fa fa-star" />
//                     <i className="fa fa-star" />
//                     <i className="fa fa-star" />
//                     <i className="fa fa-star-o" />
//                   </div>
//                   <p className="text-2xl font-bold text-gray-800">
//                     ₹{item?.price}
//                   </p>
//                   <button
//                     type="button"
//                     className="inline-block rounded border-2 border-blue px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-blue transition duration-150 ease-in-out hover:border-blue-600 hover:bg-black hover:bg-opacity-10 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 focus:outline-none focus:ring-0 active:border-blue-700 active:text-blue-700 dark:hover:bg-blue-100 dark:hover:bg-opacity-10"
//                     data-te-ripple-init
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Escalator;

import React from "react";
// import '../Lift/Lift.css'

import lift1 from "../../../assets/img/lift1.jpg";
import lift4 from "../../../assets/img/lift4.jpg";
import lift5 from "../../../assets/img/lift5.jpg";
import lift7 from "../../../assets/img/lift7.jpg";
import lift8 from "../../../assets/img/lift8.jpg";
import lift9 from "../../../assets/img/lift9.jpg";
import lift1copy from "../../../assets/img/lift1copy.jpg";

const Escalator = () => {
  return (
    <>
      <div className="mt-16 container mx-auto py-8">
        <h1 className="text-center font-bold text-4xl mb-8">ALL PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
          <div className="bg-gray-100 rounded-lg  overflow-hidden shadow-md transition duration-300  hover:scale-105">
            <img
              src={lift1}
              alt="Escalator Part"
              className="w-full h-80 object-cover z-[-100]"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Escalator Part</h4>
              <div className="flex items-center mb-2 text-yellow-500 ">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p className="text-xl font-bold text-green-600 text-gray-800 mb-4">
                $50.00
              </p>
              <button className="block w-full bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300  hover:scale-105">
            <img
              src={lift4}
              alt="Escalator Part"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Escalator Part</h4>
              <div className="flex items-center mb-2 text-yellow-500">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
                <i className="fa fa-star-o" />
              </div>
              <p className="text-xl font-bold text-green-600 text-gray-800 mb-4">
                $50.00
              </p>
              <button className="block w-full bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300  hover:scale-105">
            <img
              src={lift5}
              alt="Escalator Part"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Escalator Part</h4>
              <div className="flex items-center mb-2 text-yellow-500">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
              </div>
              <p className="text-xl font-bold text-green-600 text-gray-800 mb-4">
                $50.00
              </p>
              <button className="block w-full bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300  hover:scale-105">
            <img
              src={lift7}
              alt="Escalator Part"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Escalator Part</h4>
              <div className="flex items-center mb-2 text-yellow-500">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <p className="text-xl font-bold text-green-600 text-gray-800 mb-4">
                $50.00
              </p>
              <button className="block w-full bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300  hover:scale-105">
            <img
              src={lift8}
              alt="Escalator Part"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Escalator Part</h4>
              <div className="flex items-center mb-2 text-yellow-500">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
              </div>
              <p className="text-xl font-bold text-green-600 text-gray-800 mb-4">
                $50.00
              </p>
              <button className="block w-full bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300  hover:scale-105">
            <img
              src={lift9}
              alt="Escalator Part"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Escalator Part</h4>
              <div className="flex items-center mb-2 text-yellow-500">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
                <i className="fa fa-star-o" />
              </div>
              <p className="text-xl font-bold text-green-600 text-gray-800 mb-4">
                $50.00
              </p>
              <button className="block w-full bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300  hover:scale-105">
            <img
              src={lift1copy}
              alt="Escalator Part"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Escalator Part</h4>
              <div className="flex items-center mb-2 text-yellow-500">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
              </div>
              <p className="text-xl font-bold text-green-600 text-gray-800 mb-4">
                $50.00
              </p>
              <button className="block w-full bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300  hover:scale-105">
            <img
              src={lift4}
              alt="Escalator Part"
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Escalator Part</h4>
              <div className="flex items-center mb-2 text-yellow-500">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </div>
              <p className="text-xl font-bold text-green-600 text-gray-800 mb-4">
                $50.00
              </p>
              <button className="block w-full bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="row"></div>
      </div>
    </>
  );
};

export default Escalator;
