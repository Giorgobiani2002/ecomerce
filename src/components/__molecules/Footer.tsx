import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  LogoWhite,
  YoutubeIcon,
} from "@/utility/images/ImgExport";
import Image from "next/image";
import React from "react";
import Navbar from "../__atoms/NavBar";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full sm:h-[249px] bg-black mt-[80px]">
      <div className="max-w-[1120px] m-auto ">
        <div className=" mt-[48px] sm:flex justify-between   ">
          <div className="sm:flex flex justify-center  sm:m-0 m-auto w-[327px]">
            <Image src={LogoWhite} width={105} height={24} alt="Logo"></Image>
            <p className="text-white hidden sm:flex sm:ml-[65px] ">
              Gift & Decoration Store
            </p>
          </div>
          <div className="w-[341px] m-auto sm:m-0 text-center">
            <nav className="">
              <p className="text-white  sm:ml-[65px] sm:hidden mt-[33px]">
                Gift & Decoration Store
              </p>
              <ul className="text-white sm:flex gap-10 flex flex-col sm:flex-row mt-[40px] sm:mt-0">
                <li className="font-normal text-[14px] leading-6">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="product">Product</Link>
                </li>
                <li>
                  <Link href="contact-us">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="text-white   mt-[65px] flex flex-col-reverse  sm:flex sm:justify-between sm:flex-row text-center  ">
          <div className="sm:flex gap-7 mt-[32px] flex flex-col sm:flex-row sm:mt-0 mb-[48px] sm:mb-0">
            <p>Copyright © 2023 3legant. All rights reserved</p>
            <button>Privacy Policy</button>
            <button>Terms of Use</button>
          </div>
          <div className="flex gap-[26px] max-w-[327px] m-auto sm:m-0">
            <Image
              src={InstagramIcon}
              width={20}
              height={18}
              alt="InstagramIcon"
            />
            <Image
              src={FacebookIcon}
              width={20}
              height={18}
              alt="FacebookIcon"
            />

            <Image src={YoutubeIcon} width={20} height={18} alt="YoutubeIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
