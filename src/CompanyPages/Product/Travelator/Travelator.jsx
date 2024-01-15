// TravelatorProducts.js

import { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/slices/CartSlices";
import axios from "axios";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        error: null,
        loading: false,
      };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const initialState = {
  products: [],
  loading: true,
  error: null,
};

const TravelatorProducts = () => {
  const dispatch = useDispatch();
  const [state, dispatchProducts] = useReducer(productsReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/api/products");
        dispatchProducts({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatchProducts({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(
      addItem({
        id: product._id,
        name: product.name,
        price: product.price,
      })
    );
  };

  const liftProducts = state.products.filter(
    (product) => product.category === "Travelator"
  );

  return (
    <div className="mt-16 min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">
        TRAVELATOR PRODUCTS
      </h1>

      {state.loading && <p>Loading...</p>}

      {state.error && <p>Error: {state.error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {liftProducts.map((product) => (
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
              <div className="flex items-center mb-2 text-yellow-500">
                {[...Array(Math.floor(product.rating))].map((_, index) => (
                  <i key={index} className="fa fa-star" />
                ))}
                {product.rating % 1 !== 0 && (
                  <i key="half" className="fa fa-star-half-alt" />
                )}
                {[...Array(5 - Math.ceil(product.rating))].map((_, index) => (
                  <i key={`empty-${index}`} className="fa fa-star-o" />
                ))}
              </div>
              <p className="text-green-800 font-semibold">₹{product.price}</p>
              <button
                className="block w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition duration-300"
                onClick={() => handleAddToCart(product)}
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

export default TravelatorProducts;
