import React, { useState, useEffect, useReducer, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import products from "./product";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../shop/Spinner.jsx";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        products:
          action.payload.category === ""
            ? action.payload.data.products
            : action.payload.data.products.filter(
                (product) => product.category === action.payload.category
              ),
        totalPages:
          action.payload.category === ""
            ? action.payload.data.totalPages
            : Math.floor(products.length / 10),
        currentPage: 1,
        error: null,
        loading: false,
      };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const initialState = {
  products: [],
  loading: true,
  error: null,
  totalPages: 1,
  currentPage: 1,
  searchQuery: "",
};
export default function Products() {
  const [state, dispatchProducts] = useReducer(productsReducer, initialState);
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const location = useLocation();

  useEffect(() => {
    let productCategory = location.state && location.state.productCategory;
    console.log("category", productCategory);
    setCategory(productCategory);
    console.log(state.products);
  }, [location.state]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://simsun-backend.onrender.com/api/products?limit=${
            category === "" ? 80 : "all"
          }&page=${state.currentPage}`
        );

        dispatchProducts({
          type: "FETCH_SUCCESS",
          payload: { data: result.data, category: category },
        });
      } catch (error) {
        dispatchProducts({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    if (category !== "") {
      fetchData();
    }
  }, [state.currentPage, state.searchQuery, category]);

  const customer = useSelector((customer) => customer.user);

  const handleAddToCart = async (product) => {
    if (!customer?.isAuthenticated) {
      navigate("/auth/consumerLogin");
    } else {
      // console.log(product, customer.userData._id);

      try {
        const response = await axios.post(
          // "http://localhost:5000/api/Cart/addItem",
          "https://simsun-backend.onrender.com/api/Cart/addItem",
          {
            productId: product._id,
            productName: product.name,
            productPrice: product.price,
            productImg: product.imageUrl,
            userId: customer.userData._id,
            name: customer.userData.fullName,
            phone: customer.userData.phoneNumber,
            email: customer.userData.email,
            EnquiryDetails: "",
            address: customer.userData.address,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className=" mt-0 flex gap-10 w-full min-h-screen bg-gray-100 z-0 pt-12">
      <div className="bg-white mt-10 h-full  p-4 ">
        <h1 className="text-3xl font-semibold text-center mb-8">{category}</h1>
        {state.loading && (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {state.error && <p>Error: {state.error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {state.products.map((product) => (
            <div
              key={product._id}
              className="relative pb-10 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover object-center transition-transform transform-gpu hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-green-800 font-semibold">₹{product.price}</p>
                <button
                  className="block bg-black text-white py-2 absolute bottom-2 left-2 right-2 rounded hover:bg-gray-800 transition duration-300" // Added absolute positioning here
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/shop">
            <button className="mt-1 border-2 bg-[#161D24] text-white p-3 text-lg md:text-xl  hover:scale-110  duration-300 rounded-md">
              More Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
