"use client";
import React, { useEffect, useState } from "react";
// import useCartStore from "../__atoms/CartStore";
import Image from "next/image";
import { TableImage } from "@/utility/images/ImgExport";
import { motion } from "framer-motion";
import { getCookies } from "cookies-next";
import axios from "axios";
import { div } from "framer-motion/client";

export default function Order() {
  const [cart, setCart] = useState([]);

  const date = new Date();
  const newDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

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
    (acc: any, order: any) =>
      acc +
      order.products.reduce(
        (productAcc: any, item: any) => productAcc + item.price * item.quantity,
        0
      ),
    0
  );
  return (
    <motion.div
      className="max-w-[738px] w-full h-[730px] m-auto text-center flex justify-center "
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <div className="max-w-[546px] w-full mt-[160px]">
        <h2 className="text-[#6C7275] font-medium text-[28px] leading-8">
          Thank you! 🎉
        </h2>
        <h1 className="font-medium text-[40px] leading-10 text-black mt-[16px]">
          Your order has been received
        </h1>
        <div className="flex mt-[40px]">
          {/* {cart.map((order: any) => (
            <div className="flex mt-[40px] ">
              {order.products.map((item: any) => (
                <Image
                  src={TableImage}
                  width={80}
                  height={96}
                  alt="image"
                  className="m-auto ml-5"

                />
              ))}
            </div>
          ))} */}
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between mt-10">
            <h4>Order code:</h4>
            <h4>#0123_45678</h4>
          </div>
          <div className="flex justify-between">
            <h4>Date:</h4>
            <h4>{newDate}</h4>
          </div>
          <div className="flex justify-between">
            <h4>Total:</h4>
            <h4>${total}</h4>
          </div>
          <div className="flex justify-between">
            <h4>Payment method:</h4>
            <h4>Credit Card</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
