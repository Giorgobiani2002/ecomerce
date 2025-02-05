"use client"
import { Contact, Lock, Money, Shipping } from "@/utility/images/ImgExport";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ContactUsS4() {
  return (
    <motion.div
      className="w-full mt-[48px]  bg-[#F3F5F7] sm:h-[252px] h-[450px]  "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <div className=" max-w-[1120px] m-auto grid sm:grid-cols-4 grid-cols-2 gap-[24px]  ">
        <div className=" flex flex-col justify-center items-center gap-4 sm:h-[220px] mt-[64px] sm:mt-0  ">
          <Image src={Shipping} width={48} height={48} alt="Shipping" />
          <h6 className="font-medium text-[20px] leading-7 text-[#141718]">
            Free Shipping
          </h6>
          <p className="text-[#6C7275] text-[14px] leading-6 font-normal">
            Order above $200
          </p>
        </div>
        <div className="max-w-[1120px] m-auto flex flex-col gap-4 mt-[64px] sm:m-auto ">
          <Image src={Lock} width={48} height={48} alt="Shipping" />
          <h6 className="font-medium text-[20px] leading-7 text-[#141718]">
            Secure Payments
          </h6>
          <p className="text-[#6C7275] text-[14px] leading-6 font-normal">
            Secured by Stripe
          </p>
        </div>
        <div className="max-w-[1120px] m-auto flex flex-col gap-4  ">
          <Image src={Money} width={48} height={48} alt="Shipping" />
          <h6 className="font-medium text-[20px] leading-7 text-[#141718]">
            Money-back
          </h6>
          <p className="text-[#6C7275] text-[14px] leading-6 font-normal">
            30 days guarantee
          </p>
        </div>
        <div className="max-w-[1120px] m-auto flex flex-col gap-4">
          <Image src={Contact} width={48} height={48} alt="Shipping" />
          <h6 className="font-medium text-[20px] leading-7 text-[#141718]">
            24/7 Support
          </h6>
          <p className="text-[#6C7275] text-[14px] leading-6 font-normal">
            Phone and Email support
          </p>
        </div>
      </div>
    </motion.div>
  );
}
