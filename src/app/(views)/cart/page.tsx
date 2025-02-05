"use client";
// import useCartStore from "@/components/__atoms/CartStore";
import Checkout from "@/components/__molecules/Checkout";
import Order from "@/components/__molecules/Order";
import Shopping from "@/components/__molecules/Shopping";
import { TableImage } from "@/utility/images/ImgExport";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export default function Cart() {
  const [checkOut, isCheckOut] = useState(false);
  const [shopping, isShopping] = useState(true);
  const [order, isOrder] = useState(false);
  // const cart = useCartStore((state) => state.cart);
  const handleCheckOut = () => {
    isCheckOut(true);
    console.log(checkOut);
    isOrder(false);
    isShopping(false);
  };

  const handleShopping = () => {
    isCheckOut(false);
    isOrder(false);
    isShopping(true);
  };
  const handleOrder = () => {
    isShopping(false);
    isOrder(true);
    isCheckOut(false);
  };

  return (
    <div className='max-w-[1120px] w-full'>
      <h2 className='text-center mt-20 text-[58px] leading-[54px] font-medium text-[#000000]'>
        Cart
      </h2>
      <div className='flex justify-evenly mt-[40px]'>
        <div className='flex items-center '>
          <div className='bg-[#23262f7a] w-[42px] h-[42px] rounded-[40px] flex justify-center items-center'>
            <h5 className='text-white font-medium text-[16px] leading-4'>1</h5>
          </div>
          <button
            className='text-black font-semibold text-[16px] leading-7 ml-[17px]'
            // onClick={handleShopping}
          >
            Shopping cart
          </button>
        </div>
        <div className='flex items-center   '>
          <div className='bg-[#23262f7a] w-[42px] h-[42px] rounded-[40px] flex justify-center items-center'>
            <h5 className='text-white font-medium text-[16px] leading-4'>2</h5>
          </div>
          <button
            // onClick={handleCheckOut}
            className='text-black font-semibold text-[16px] leading-7 ml-[17px] hidden sm:flex'
          >
            Checkout details
          </button>
        </div>
        <div className='sm:flex items-center hidden '>
          <div className='bg-[#23262f7a] w-[42px] h-[42px] rounded-[40px] flex justify-center items-center'>
            <h5 className='text-white font-medium text-[16px] leading-4'>3</h5>
          </div>
          <button
            className='text-black font-semibold text-[16px] leading-7 ml-[17px]'
            // onClick={handleOrder}
          >
            Order complete
          </button>
        </div>
      </div>
      {/* {checkOut && <Checkout />} */}
      <AnimatePresence>{shopping && <Shopping />}</AnimatePresence>
      {/* {order && <Order />} */}
    </div>
  );
}
