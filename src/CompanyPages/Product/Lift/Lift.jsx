import React from "react";
// import "./Lift.css";

import useSWR, { mutate } from "swr";
import axios from "axios";

import lift1 from "../../../assets/img/lift1.jpg";

const Lift = () => {
  const fetcher = async (...args) => {
    const res = await axios.get(...args);
    console.log(res?.data?.result);
    return res?.data?.result;
  };

  const { data, error, isLoading } = useSWR(
    "https://shy-ruby-gosling-sari.cyclic.app/api/product/Lift",
    fetcher
  );

  return (
    <>
      <div className="   ">
        <h1
          style={{ textAlign: "center", fontWeight: "bolder" }}
          className="mt-16"
        >
          <strong className="text-3xl mt-4">Lift</strong>
          <div className="h-[300px]"></div>
        </h1>
        <div className="row  flex sm:flex-row flex-col ">
          {data?.map((item) => {
            return (
              <>
                <div className="col-4  bg-[#f2f2f2]  gap-2">
                  <img src={item?.imageUrl || lift1} className="rounded-md" />
                  <h4 className="text-3xl font-semibold">{item?.name}</h4>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">
                    ₹{item?.price}
                  </p>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-blue px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-blue transition duration-150 ease-in-out hover:border-blue-600 hover:bg-blue-500 hover:bg-opacity-10 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 focus:outline-none focus:ring-0 active:border-blue-700 active:text-blue-700 dark:hover:bg-blue-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Lift;
