import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../store/slices/CartSlices";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState([]);
  const userId = useSelector((state) => state.user.userData._id);

  useEffect(() => {
    fetchCartData();
  }, [userId]);

  const fetchCartData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/Cart/${userId}`);
      // console.log("this is res: ", response);
      // console.log("this is userid", userId);
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await response.json();
      // console.log("this is data we r fetching:", data.items);
      setCartData(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantityChange = async (id, newQuantity) => {
    try {
      dispatch(updateQuantity({ id, quantity: newQuantity }));

      await axios.put(
        `http://localhost:5000/api/cart/updateQuantity/${userId}/${id}`,
        {
          quantity: newQuantity,
        }
      );

      // Update the local cart data state
      setCartData(prevCartData =>
        prevCartData.map(item =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        ))
    } catch (error) {
      console.error(error);
    }
    
  };

  const handleDelete = async (id) => {
    try {
      // console.log("this is product", id);
      const response = await axios.delete(
        `http://localhost:5000/api/Cart/delete/${userId}/${id}`,
        {}
      );
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    dispatch(removeItem(id));
    // console.log(cartData);
    setCartData((prev) => prev.filter((item) => item.productId._id != id));
  };

  // const subTotal = cartData.reduce((acc, order) => {
  //   return (
  //     acc +
  //     order.items.reduce((itemAcc, item) => {
  //       if (item.price && item.quantity) {
  //         return itemAcc + item.price * item.quantity;
  //       }
  //       return itemAcc;
  //     }, 0)
  //   );
  // }, 0);

  const subTotal = cartData.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // const subTotal = 120;

  const discount = 0; // You can add discount logic here if needed
  const gst = 0.18 * subTotal;
  const totalAmount = subTotal + gst - discount;

  const customer = useSelector((customer) => customer.user);

  const handlePayment = () => {
    if (customer?.isAuthenticated) {
      navigate("/shipping");
    } else {
      navigate("/auth/consumerLogin");
    }
  };

  return (
    <div className="md:mt-16 bg-gradient-to-b from-blue-200  to-blue-400 min-h-screen py-10 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        <div className="text-white h-full w-full xl:flex">
          <div className="text-white xl:w-[60%] p-4">
            <div className="flex justify-between items-center px-2">
              <div className="text-black font-bold text-xl">
                Items -{cartData.length}
                {/* {console.log("heelo", cartData)} */}
              </div>
            </div>

            <div className="md:grid grid-cols-3 gap-4 flex flex-col">
              {cartData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex ion justify-between mr-4">
                    <img
                      className="p-8 rounded-t-lg w-32 h-32"
                      src={item.image}
                      alt={item.name}
                    />
                    <button
                      className="bg-red-500 py-2 px-4 mt-10 rounded h-12"
                      onClick={() => handleDelete(item.productId._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </a>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {item.price}
                      </span>
                      {/* Check if item.quantity is a valid number */}
                      {typeof item.quantity === "number" &&
                        item.quantity > 0 && (
                          <div className="flex items-center space-x-2">
                            <button
                              className="text-gray-600 dark:text-white"
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.quantity - 1
                                )
                              }
                            >
                              <i className="fas fa-minus-circle"></i>
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="text-gray-600 dark:text-white"
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.quantity + 1
                                )
                              }
                            >
                              <i className="fas fa-plus-circle"></i>
                            </button>
                          </div>
                        )}
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
              <span className="text-yellow-700">₹{subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              Total Discount
              <span className="text-red-500">-₹{discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              GST@18%
              <span className="text-green-500">₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              Total Amount
              <span className="text-yellow-700">₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={handlePayment}
                // onClick={() => handlePayment(subTotal, id, email)}
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
      </div>
    </div>
  );
}

export default Cart;
