import React, { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/slices/CartSlices";
import { useNavigate } from "react-router-dom";
import products from "./product";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAnglesLeft } from "react-icons/fa6";

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
};
export default function Products() {
  const dispatch = useDispatch();
  const [state, dispatchProducts] = useReducer(productsReducer, initialState);
  const navigate = useNavigate();

  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://simsun-backend.onrender.com/api/products?category=Lift%20Spare%20Parts&limit=15&page=${state.currentPage}`
        );
        dispatchProducts({
          type: "FETCH_SUCCESS",
          payload: { data: result.data, category: category },
        });
      } catch (error) {
        dispatchProducts({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, [state.currentPage, state.searchQuery, category]);

  const customer = useSelector((customer) => customer.user);

  const handleAddToCart = (product) => {
    if (!customer?.isAuthenticated) {
      navigate("/auth/consumerLogin");
    } else {
      dispatch(
        addItem({
          id: product._id,
          name: product.name,
          price: product.price,
        })
      );
    }
  };

  const handlePageChange = (page) => {
    dispatchProducts({ type: "SET_CURRENT_PAGE", payload: page });
  };

  const handleEnquiry = (product) => {
    const mailto = `mailto:sales@example.com?subject=Product Enquiry - ${product.name}&body=Product Name: ${product.name}%0D%0ACategory: ${product.category}%0D%0ADescription: ${product.description}%0D%0AWrite Your Enquiry Here: `;
    window.location.href = mailto;
  };

  const [heading, setHeading] = useState("");

  return (
    <div className=" mt-0 md:mt-16 flex gap-10 w-full min-h-screen bg-gray-100 z-0">
      <div className=" md:w-1/2 lg:w-1/3 mt-10 hidden md:flex flex-col h-full ml-10 bg-white">
        <h2 className="text-xl font-semibold p-5 pl-5">Product groups</h2>
        <hr className="w-full" />
        <ul className="flex flex-col gap-10 mt-5 font-semibold p-5 pl-5">
          {products.map((myproduct, index) => (
            <Link key={index} to={myproduct.link}>
              <h2
                className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-md"
                onClick={() => {
                  setHeading((prevHeading) =>
                    prevHeading === myproduct.name ? "" : myproduct.name
                  );
                }}
              >
                {myproduct.name}
                {myproduct.subMenu && (
                  <div>
                    <div>
                      <span className="text-xl md:hidden inline">
                        {heading === myproduct.name ? (
                          <FaAnglesLeft />
                        ) : (
                          <FaAngleRight />
                        )}
                      </span>
                      <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                        <FaAngleRight />
                      </span>
                    </div>

                    <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                      <div className="py-0">
                        <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                      </div>
                      <div className="bg-[#161D24]/90 text-white p-4 flex flex-col rounded-xl -mr-20">
                        {myproduct.subCategories.map((subcategory) => (
                          <li
                            key={subcategory.id}
                            className="hover:text-red-500"
                            onClick={() => {
                              setCategory(subcategory.name);
                            }}
                          >
                            {subcategory.name}
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </h2>
            </Link>
          ))}
        </ul>
      </div>

      <div className="bg-white mt-10 h-full  p-4 ">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Our Products
        </h1>
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
          {state.products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
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
                {product.rating ? (
                  <div className="flex items-center mb-2 text-yellow-500">
                    {[...Array(Math.floor(product.rating))].map((_, index) => (
                      <i key={index} className="fa fa-star" />
                    ))}
                    {product.rating % 1 !== 0 && (
                      <i key="half" className="fa fa-star-half-alt" />
                    )}
                    {[...Array(5 - Math.ceil(product.rating))].map(
                      (_, index) => (
                        <i key={`empty-${index}`} className="fa fa-star-o" />
                      )
                    )}
                  </div>
                ) : null}

                <p className="text-green-800 font-semibold">₹{product.price}</p>
                <button
                  className="block w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition duration-300"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="block w-full  text-white py-2 mt-2 font-[Poppins] rounded bg-red-500 hover:bg-red-600 transition duration-300"
                  onClick={() => handleEnquiry(product)}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          {[...Array(state.totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 px-4 py-2 rounded ${
                state.currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
