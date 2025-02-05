"use state";
import { TableImage } from "@/utility/images/ImgExport";
import axios from "axios";
import { getCookies } from "cookies-next";
import { div } from "framer-motion/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function () {
  const [cart, setCart] = useState([]);
  const userId = getCookies().auth_name;

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          `https://eccomerce-back-klm1.onrender.com/auth/${userId}`
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

  return (
    <div className="max-w-[400px] ml-auto mr-auto w-full  p-4 border border-gray-300 rounded-md">
      <h1 className="text-xl font-bold mb-4">Order Summary</h1>
      {cart.map((order: any) => (
        <div>
          {order.products.map((item: any) => (
            <div className="max-w-[376px] w-full h-[144px] flex items-center justify-between border-b-[1px] border-gray-300 ">
              <div className="flex items-center">
                <Image src={TableImage} width={80} height={96} alt="table" />
                <div className="ml-4">
                  <h5>{item.name}</h5>
                  {/* <h5>{item.color}</h5> */}
                  <div className="flex justify-around items-center border-[1px] border-black rounded-[4px] max-w-[80px] w-full ">
                    
                    <h5>{item.quantity}</h5>
                    
                  </div>
                </div>
              </div>
              <h5>${item.price * item.quantity}</h5>
            </div>
          ))}
        </div>
      ))}

      {/* <div className="max-w-[376px] w-full h-[144px] flex items-center justify-between border-b-[1px] border-gray-300 ">
        <div className="flex items-center">
          <Image src={TableImage} width={80} height={96} alt="table" />
          <div className="ml-4">
            <h5>Tray Table</h5>
            <h5>Color: Black</h5>
            <div className="flex justify-around items-center border-[1px] border-black rounded-[4px] max-w-[80px] w-full ">
              <button>-</button>
              <h5>count</h5>
              <button>+</button>
            </div>
          </div>
        </div>
        <h5>$38.00</h5>
      </div> */}
      <div className="h-[52px] flex justify-between mt-5">
        <h5>Shipping</h5>
        <h5>Free</h5>
      </div>
      <div className="h-[52px] flex justify-between mt-5">
        <h5>Subtotal</h5>

        <h5>${total}</h5>
      </div>
      <div className="h-[52px] flex justify-between mt-5">
        <h5>Total</h5>
        <h5>${total}</h5>
      </div>
    </div>
  );
}
