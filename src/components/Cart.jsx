import React from "react";
import imageurl from "../assets/img/lift2.jpg";
import { useSelector } from "react-redux";

function Cart() {
  // Static data for previous orders
  const state = useSelector(state => state.cart)
  console.log(state)
  const previousOrders = [
    {
      id: 1,
      title: "Course Title 1",
      price: 49.99,
      imageURL: imageurl,
    },
    {
      id: 2,
      title: "Course Title 2",
      price: 29.99,
      imageURL: imageurl,
    },
    {
      id: 3,
      title: "Course Title 3",
      price: 39.99,
      imageURL: imageurl,
    },
    {
      id: 3,
      title: "Course Title 3",
      price: 39.99,
      imageURL: imageurl,
    },
    {
      id: 3,
      title: "Course Title 3",
      price: 39.99,
      imageURL: imageurl,
    },
  ];

  const handleClick = (e, id, title, price) => {
    // Handle checkbox click
  };

  // Static data for subTotal, id, and email
  const subTotal = state?.reduce((acc, item) => acc + item.price, 0);
  const id = 123;
  const email = "user@example.com";

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen py-10 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        <div className="text-white h-full w-full xl:flex">
          <div className="text-white xl:w-[60%] p-4">
            <div className="flex justify-between items-center px-2">
              <div className="text-black font-bold text-xl">
                Items - {state?.length}
              </div>
            </div>

            <div className="md:grid grid-cols-3 gap-4 flex flex-col">
              {state?.map((order) => (
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                 
                    <img
                      className="p-8 rounded-t-lg w-full"
                      src={order?.imageUrl || imageurl}
                      alt="product image"
                    />
                 
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {order?.name}
                      </h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                      </span>
                    </div>
                    <p>{order?.descp?.slice(0,40)}...</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ₹{order?.price}
                      </span>
                      
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div className="mb-12 text-white max-h-[25rem] rounded-md bg-slate-800 xl:w-[34%] p-5  xl:translate-x-14 xl:translate-y-8 ">
            <div className="flex items-center p-2 text-2xl font-semibold">
              Bill Details
            </div>
            <div className="flex justify-between items-center p-2">
              Subtotal
              <span className="text-yellow-700">₹{subTotal}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              Total Discount
              <span className="text-red-500">-₹0</span>
            </div>
            <div className="flex justify-between items-center p-2">
              GST@18%
              <span className="text-green-500">
                ₹{(0.18 * subTotal).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center p-2">
              Total Amount
              <span className="text-yellow-700">
                ₹{subTotal + parseFloat((0.18 * subTotal).toFixed(2))}
              </span>
            </div>
            <div className="flex justify-between items-center p-2">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => handlePayment(subTotal, id, email)}
              >
                Make Payment
              </button>
            </div>
            <div className="flex justify-between items-center p-2">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[58%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Coupon Code"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded hidden xl:block w-[40%]">
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="text-white w-full text-2xl text-left mt-4">
          Previous Orders
        </div>
        <div className="text-white w-full text-2xl text-left mt-2">
          <div className="container m-auto md:grid grid-cols-3 gap-4 py-2 px-6 flex flex-col">
            {previousOrders.map((order) => (
              <div
                key={order.id}
                className="flex max-w-[18rem] rounded-lg bg-white shadow-md dark:bg-slate-700 "
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat min-w-[3rem]">
                  <img
                    className="rounded-t-lg h-full"
                    src={order.imageURL}
                    alt=""
                  />
                </div>
                <div className="p-2 flex flex-col flex-start items-center justify-around ">
                  <p className="text-base text-neutral-600 dark:text-neutral-200 text-center font-semibold">
                    {order.title}
                  </p>
                  <p className="text-base text-neutral-600 dark:text-neutral-200 text-center font-semibold">
                    ₹{order.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
