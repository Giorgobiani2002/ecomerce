import React from "react";
import { mail } from "@/utility/images/ImgExport";
import Image from "next/image";

export default function NewsLetterSection() {
  return (
    <div className="max-w-[1440px] w-full flex justify-center ml-auto mr-auto">
      <div className="max-w-[1184px] w-full flex  justify-center pl-[32px] pr-[32px] bg-[url('/Newsletter.jpg')] bg-cover bg-center h-[392px]">
        <div className="relative z-10 flex flex-col justify-center gap-y-[8px] items-center h-full">
          <p className="text-4xl font-medium">Join Our Newsletter</p>
          <h1 className="text-md ">
            Sign up for deals, new products and promotions
          </h1>
          <div className="pt-[24px] flex flex-col">
            <div className="flex gap-x-[8px] py-[12px]">
              <Image src={mail} alt="email Icon" />
              <input
                type="text"
                placeholder="Email address"
                className="border-none bg-transparent outline-none"
              />
              <button className="bg-transparent text-[#6C7275] text-sm">
                Signup
              </button>
            </div>
            <div className="h-[1px] w-full bg-[#6C7275]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
