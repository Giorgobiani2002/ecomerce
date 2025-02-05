"use client";
import { TableImage } from "@/utility/images/ImgExport";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import useCartStore from "../__atoms/CartStore";
import Checkout from "./Checkout";
import axios from "axios";
import { getCookies } from "cookies-next";

export default function Shopping() {
  const [checkOut, isCheckOut] = useState(false);
  const [shopping, isShopping] = useState(true);
  const [cart, setCart] = useState([]);

  const handleCheckOut = () => {
    isCheckOut(true);
    isShopping(false);
  };

  const express = 15;

  const userId = getCookies().auth_name;

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/auth/${userId}`
        );

        setCart(response.data.order);
        console.log(response.data.order);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrderData();
  }, [userId]);

  const total = cart.reduce(
    (acc, order:any) =>
      acc +
      order.products.reduce(
        (productAcc:any, item:any) => productAcc + item.price * item.quantity,
        0
      ),
    0
  );
  // const increaseQuantity = (orderId, productId) => {
  //   setCart((prevCart:any) =>
  //     prevCart.map((order) => {
  //       if (order.id === orderId) {
  //         return {
  //           ...order,
  //           products: order.products.map((item) =>
  //             item.id === productId
  //               ? { ...item, quantity: item.quantity + 1 }
  //               : item
  //           ),
  //         };
  //       }
  //       return order;
  //     })
  //   );
  // };
  
  // const decreaseQuantity = (orderId, productId) => {
  //   setCart((prevCart:any) =>
  //     prevCart.map((order) => {
  //       if (order.id === orderId) {
  //         return {
  //           ...order,
  //           products: order.products.map((item) =>
  //             item.id === productId && item.quantity > 1
  //               ? { ...item, quantity: item.quantity - 1 }
  //               : item
  //           ),
  //         };
  //       }
  //       return order;
  //     })
  //   );
  // };
  return (
    <div>
      {!checkOut && (
        <AnimatePresence>
          <motion.div
            className={`flex mt-[80px] ml-[32px] mr-[32px] ${
              shopping ? "" : "hidden"
            }`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{
              once: true,
            }}
          >
            <div className="w-full flex sm:justify-between  sm:flex-row  flex-col">
              <div className="max-w-[643px] w-full">
                <div className="w-full flex justify-between h-[50px] border-b-[1px] border-black text-[#121212] font-semibold">
                  <h5>Product</h5>
                  <div className="max-w-[322px] w-full flex justify-between">
                    <h5>Quantity</h5>
                    <h5>Price</h5>
                    <h5>Subtotal</h5>
                  </div>
                </div>
                {cart.map((order: any) => (
                  <div>
                    {order.products.map((item: any) => (
                      <div
                        key={item.id}
                        className="h-[144px] flex items-center"
                      >
                        <div className="max-w-[316px] w-full flex items-center">
                          <Image
                            src={TableImage}
                            width={80}
                            height={96}
                            alt="table"
                          />
                          <div className="ml-4">
                            <h5>{item.name}</h5>
                            <h5>{item.color}</h5>
                            {/* <button onClick={() => removeFromCart(item.id)}>
                          Remove
                        </button> */}
                          </div>
                        </div>
                        <div className="max-w-[322px] w-full h-[32px] flex justify-between">
                          <div className="flex justify-around items-center border-[1px] border-black rounded-[4px] max-w-[80px] w-full">
                            {/* <button onClick={() => decreaseQuantity(order.id, item.id)}>
                              -
                            </button> */}
                            <h5>{item.quantity}</h5>
                            {/* <button onClick={() => increaseQuantity(order.id,item.id)}>
                              +
                            </button> */}
                          </div>
                          <h5>${item.price}</h5>
                          <h5>${item.price * item.quantity}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="sm:max-w-[413px] m-auto sm:ml-5 w-full p-[24px] border-[1px] border-black rounded-md">
                <div className="sm:max-w-[365px] w-full">
                  <h5>Cart summary</h5>
                  <div className="h-[52px] mt-4 border-[1px] border-black rounded-md flex justify-between p-4 items-center">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="free"
                        name="shipping"
                        value="free"
                        defaultChecked
                      />
                      <label htmlFor="free" className="ml-2">
                        Free shipping
                      </label>
                    </div>
                    <h5>$0</h5>
                  </div>
                  <div className="h-[52px] mt-4 border-[1px] border-black rounded-md flex justify-between p-4 items-center">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="express"
                        name="shipping"
                        value="express"
                      />
                      <label htmlFor="express" className="ml-2">
                        Express shipping
                      </label>
                    </div>
                    <h5>$300</h5>
                  </div>
                  <div className="h-[52px] mt-4 border-[1px] border-black rounded-md flex justify-between p-4 items-center">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="pickup"
                        name="shipping"
                        value="pickup"
                      />
                      <label htmlFor="pickup" className="ml-2">
                        Pick Up
                      </label>
                    </div>
                    <h5>$500</h5>
                  </div>
                  <div className="flex justify-between mt-4 h-[52px] items-center border-b-[1px]">
                    <h5>Subtotal</h5>
                    <h5>${total}</h5>
                  </div>
                  <div className="flex justify-between mt-4 h-[52px] items-center">
                    <h5>Total</h5>
                    <h5>${total}</h5>
                  </div>
                  <button
                    className={`w-full bg-black text-white h-[52px] mt-[40px] rounded-lg ${
                      cart.length < 1
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black text-white"
                    }`}
                    onClick={handleCheckOut}
                    disabled={cart.length < 1}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {checkOut && <Checkout />}
    </div>
  );
}
