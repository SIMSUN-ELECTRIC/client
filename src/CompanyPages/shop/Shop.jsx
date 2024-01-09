// import React from 'react'
// import lift from '../../assets/img/escalator1.jpg'
// import { useDispatch } from 'react-redux';
// import { addItem } from '../../store/slices/CartSlices';

// import useSWR,{ mutate } from 'swr'
// import axios from 'axios';

// const Shop = () => {
//   const fetcher = async (...args) => {
//     const res = await axios.get(...args);
//     return res?.data?.result;
//   }

//   const dispatch = useDispatch()

//   const {data,error,isLoading} = useSWR('http://localhost:5000/api/allProduct',fetcher)
//   console.log(data)
//     const products = [
//         {
//           name: 'Electric Lift Motor',
//           description: 'Powerful motor designed for smooth and reliable lift operation.',
//           price: '₹199.99',
//           image: 'motor.jpg',
//         },
//         {
//           name: 'Lift Control Panel',
//           description: 'Advanced control panel for precise lift management and safety.',
//           price: '₹129.99',
//           image: 'control-panel.jpg',
//         },
//         {
//           name: 'Safety Sensors Kit',
//           description: 'Essential sensors to ensure safe and obstacle-free lift operation.',
//           price: '₹59.99',
//           image: 'sensors.jpg',
//         },
//         {
//           name: 'Lift Cable Set',
//           description: 'High-quality cables for lifting heavy loads with stability and durability.',
//           price: '₹79.99',
//           image: 'cables.jpg',
//         },
//         {
//           name: 'Remote Control Unit',
//           description: 'Wireless remote for convenient and easy lift control from a distance.',
//           price: '₹49.99',
//           image: 'remote.jpg',
//         },
//         {
//           name: 'Lift Platform Assembly',
//           description: 'Complete assembly for a sturdy and reliable lift platform.',
//           price: '₹249.99',
//           image: 'platform.jpg',
//         },
//         {
//             name: 'Lift Safety Brake System',
//             description: 'Essential safety brake system for emergency lift stops and protection.',
//             price: '₹89.99',
//             image: 'safety-brake.jpg',
//           },
//           {
//             name: 'Lift Push Button Panel',
//             description: 'User-friendly push button panel for convenient floor selection and operation.',
//             price: '₹34.99',
//             image: 'push-button-panel.jpg',
//           },
//       ];

//   return (
//     <>
//           <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-semibold text-center mb-8">Shop</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {data?.map((product) => (
//           <div
//             key={product?._id}
//             className="bg-[#9abfe3] text-center hover:bg-blue-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mt-4 mb-5"
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.imageUrl }
//               className="mx-auto mb-4 w-full h-32 object-contain"
//             />
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600 mb-2">{product.descp}</p>
//             <p className="text-blue-500 font-semibold">₹{product.price}</p>
//             <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded mt-4"
//             onClick={(e) => dispatch(addItem(product))}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }

// export default Shop

import lift from "../../assets/img/escalator1.jpg";
import lift1 from "../../assets/img/lift1.jpg";
import lift4 from "../../assets/img/lift4.jpg";
import lift5 from "../../assets/img/lift5.jpg";
import lift7 from "../../assets/img/lift7.jpg";
import lift8 from "../../assets/img/lift8.jpg";
import lift9 from "../../assets/img/lift9.jpg";
import lift1copy from "../../assets/img/lift1copy.jpg";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/CartSlices";

const products = [
  {
    name: "Electric Lift Motor",
    description:
      "Powerful motor designed for smooth and reliable lift operation.",
    price: "₹199.99",
    image: lift1,
    rating: 4,
  },
  {
    name: "Lift Control Panel",
    description:
      "Advanced control panel for precise lift management and safety.",
    price: "₹129.99",
    image: lift,
    rating: 4,
  },
  {
    name: "Safety Sensors Kit",
    description:
      "Essential sensors to ensure safe and obstacle-free lift operation.",
    price: "₹59.99",
    image: lift1copy,
    rating: 4,
  },
  {
    name: "Lift Cable Set",
    description:
      "High-quality cables for lifting heavy loads with stability and durability.",
    price: "₹79.99",
    image: lift4,
    rating: 4,
  },
  {
    name: "Remote Control Unit",
    description:
      "Wireless remote for convenient and easy lift control from a distance.",
    price: "₹49.99",
    image: lift5,
    rating: 4,
  },
  {
    name: "Lift Platform Assembly",
    description: "Complete assembly for a sturdy and reliable lift platform.",
    price: "₹249.99",
    image: lift7,
    rating: 4,
  },
  {
    name: "Lift Safety Brake System",
    description:
      "Essential safety brake system for emergency lift stops and protection.",
    price: "₹89.99",
    image: lift8,
    rating: 4,
  },
  {
    name: "Lift Push Button Panel",
    description:
      "User-friendly push button panel for convenient floor selection and operation.",
    price: "₹34.99",
    image: lift9,
    rating: 4,
  },
];

const Shop = () => {
  const dispatch = useDispatch();

  return (
    <div className="mt-16 min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={product.image} // Use the image defined in the product object
                alt={product.name}
                className="w-full h-48 object-cover object-center transition-transform transform-gpu hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-green-800 font-semibold">{product.price}</p>
              <button
                className="block w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition duration-300"
                onClick={() => dispatch(addItem(product))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
