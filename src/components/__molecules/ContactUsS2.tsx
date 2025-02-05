"use client"
import React from "react";
import { ContactUsBanner, ArrowRight } from "@/utility/images/ImgExport";
import Image from "next/image";
import {motion} from "framer-motion"

export default function ContactUsS2() {
  return (
    <motion.div className="mt-[48px] max-w-[1120px] flex m-auto flex-col sm:flex-row" 
    initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}>
      <Image
        src={ContactUsBanner}
        width={560}
        height={413}
        alt="BannerContactUs"
        className="m-auto sm:m-0"
      />
      <div className="bg-[#F3F5F7] flex justify-center items-center max-w-[558px] w-full m-auto sm:m-0 ">
        <div className="max-w-[452px]">
          <h3 className="font-medium text-[40px] leading-10 text-[#121212] mt-[63px] sm:mt-0 ">
            About Us
          </h3>
          <p className="font-normal text-[16px] leading-[26px] text-[#121212] mt-[16px]">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>
          <div className="flex mt-[24px] items-center">
            <button className="font-medium text-[16px] leading-7 text-[#121212] mb-[65px] sm:mb-0 ">
              Shop Now
            </button>
            <Image src={ArrowRight} width={20} height={20} alt="ArrowRight" className="mb-[65px] sm:mb-0" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
