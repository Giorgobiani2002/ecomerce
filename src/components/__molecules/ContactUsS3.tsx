"use client";
import React from "react";
import { Adress, Contact, Email, Map } from "@/utility/images/ImgExport";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function ContactUsS3() {
  return (
    <div className="mt-[48px] max-w-[560px] sm:max-w-[1120px] m-auto ">
      <h1 className="text-center font-medium text-[44px] leading-[40px]">
        Contact Us
      </h1>
      <div className=" grid sm:grid-cols-3 grid-cols-1 gap-4 mt-[40px] ">
        <div className="bg-[#F3F5F7] text-center flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center gap-3 py-4">
            <Image src={Adress} height={32} width={32} alt="Adress" />
            <h6 className="text-[#6C7275] font-bold text-[16px] leading-4">
              Address
            </h6>
            <span className="font-semibold text-[16px] leading-[26px] text-[#141718]">
              234 Hai Trieu, Ho Chi Minh City, Viet Nam
            </span>
          </div>
        </div>
        <div className="bg-[#F3F5F7] text-center flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center gap-3 py-4">
            <Image src={Contact} height={32} width={32} alt="Adress" />
            <h6 className="text-[#6C7275] font-bold text-[16px] leading-4">
              Contact Us
            </h6>
            <span className="font-semibold text-[16px] leading-[26px] text-[#141718]">
              +84 234 567 890
            </span>
          </div>
        </div>
        <div className="bg-[#F3F5F7] text-center flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center gap-3 py-4">
            <Image src={Email} height={32} width={32} alt="Adress" />
            <h6 className="text-[#6C7275] font-bold text-[16px] leading-4">
              Email
            </h6>
            <span className="font-semibold text-[16px] leading-[26px] text-[#141718]">
              hello@3legant.com
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-[40px] gap-[28px]">
        <div className="w-full">
          <form
            action="https://formspree.io/f/xvgorllp"
            className=""
            method="POST"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                FULL NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border mt-[12px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border mt-[12px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                MESSAGE
              </label>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Your Message"
                className="w-full h-[140px] mt-[12px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-[189px] px-4 py-2 bg-black text-white rounded-md shadow-md hover:scale-105 transition duration-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
        <Image
          src={Map}
          width={548}
          height={404}
          alt="Map"
          className="m-auto sm:m-0"
        />
      </div>
    </div>
  );
}
