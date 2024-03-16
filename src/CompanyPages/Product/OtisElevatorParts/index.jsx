import React, { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../../shop/Spinner";
import { toast } from "react-toastify";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload.data.products.filter(
          (product) =>
            product.name.toLowerCase().includes("otis") ||
            product.description.toLowerCase().includes("otis")
        ),
        totalPages: Math.ceil(
          action.payload.data.products.length / state.productsPerPage
        ),
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
  productsPerPage: 28,
};

const Products = () => {
  const [state, dispatchProducts] = useReducer(productsReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://simsun-backend.onrender.com/api/products?limit=all`
        );

        dispatchProducts({
          type: "FETCH_SUCCESS",
          payload: { data: result.data },
        });
      } catch (error) {
        dispatchProducts({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, []);

  const customer = useSelector((customer) => customer.user);

  const handleAddToCart = async (product) => {
    if (!customer?.isAuthenticated) {
      navigate("/auth/consumerLogin");
    } else {
      try {
        const response = await axios.post(
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
        toast.success("Added to cart");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlePageChange = (page) => {
    dispatchProducts({ type: "SET_CURRENT_PAGE", payload: page });
  };

  const indexOfLastProduct = state.currentPage * state.productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - state.productsPerPage;
  const currentProducts = state.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="mt-0 md:mt-20 min-h-screen bg-gray-100 p-4 pt-28 md:pt-4">
      <h1 className="text-3xl font-semibold text-center mb-8">
        OTIS Elevator Parts
      </h1>
      {state.loading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {state.error && <p>Error: {state.error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
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
        {Array.from({ length: state.totalPages }, (_, index) => {
          const pageNumber = index + 1;
          if (
            pageNumber <= state.totalPages &&
            pageNumber <=
              Math.ceil(state.products.length / state.productsPerPage)
          ) {
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`mx-2 px-4 py-2 rounded ${
                  state.currentPage === pageNumber
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                {pageNumber}
              </button>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Products;
