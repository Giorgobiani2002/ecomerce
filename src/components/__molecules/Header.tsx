"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import {
  BlackLogo,
  FacebookIconBlack,
  InstagramIconBlack,
  youtubeIconBlack,
  burgerMenu,
  cartIcon,
  searchIcon,
  userIcon,
} from "@/utility/images/ImgExport";
import Navbar from "../__atoms/NavBar";
import Link from "next/link";
import { navLinks } from "@/commons/services/navLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUser, setHasUser] = useState(false);
  const PathName = usePathname();
  const router = useRouter();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleClick = () => {
    router.push("/sign-in");
  };

  useEffect(() => {
    const token = getCookie("auth_token");
    const userId = getCookie("auth_name");
    setHasUser(!!token);
    const fetchCartQuantity = async () => {
      try {
        const response = await fetch(`https://eccomerce-back-klm1.onrender.com/auth/${userId}`);
        const data = await response.json();
        const quantity = data.order.map((item: any) => item.products.length);
        const cart = data.order.map((item: any) => item.products);
        setCart(cart);
        setTotalQuantity(quantity);
      } catch (error) {
        console.error("Error fetching cart quantity:", error);
      }
    };

    fetchCartQuantity();
  }, [cart]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleLogout = () => {
    deleteCookie("auth_token");
    deleteCookie("auth_name");
    setHasUser(false);
    router.push("/sign-in"); // Redirect to sign-in page after logout
  };

  const handleClickCart = () => {
    router.push("/cart");
  };

  return (
    <header className="max-w-[1120px] w-full h-[60px] flex items-center justify-between">
      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center ml-[32px]">
        <Image
          src={burgerMenu}
          width={27}
          height={27}
          alt="burgerMenu"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div className="relative z-50">
              <motion.div
                className={`fixed top-0 left-0 h-screen bg-white shadow-lg transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }  w-[343px]`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                viewport={{
                  once: true,
                }}
              >
                <div className="flex">
                  <button
                    className="absolute top-4 right-4 text-3xl text-black"
                    onClick={toggleMenu}
                  >
                    &times;
                  </button>
                  <div className="absolute w-[70px] h-[40px] top-6 left-6">
                    <Image
                      src={BlackLogo}
                      layout="fill"
                      objectFit="contain"
                      alt="logo"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="absolute border-[1px] border-black top-[64px] ml-6 max-w-[294px] w-full rounded-[6px] pl-2 h-[46px]"
                  />
                </div>
                <div className="p-6 absolute top-[126px]">
                  <nav className="w-[294px]">
                    <ul className="flex gap-4 flex-col">
                      {navLinks.map((item) => {
                        const isActive = PathName.startsWith(item.link);
                        return (
                          <li
                            key={item.link}
                            className="border-b-[1px] h-[40px] border-[#E8ECEF]"
                          >
                            <span
                              className={`font-publicSans font-bold leading-[24px] hover:text-black group-hover:text-black duration-1000 ${
                                isActive
                                  ? "text-[#201F24] group-hover:text-black"
                                  : "text-[#141718]"
                              } text-[14px]`}
                            >
                              <Link href={item.link}>{item.title}</Link>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
                <div className="absolute w-[295px] h-[210px] top-[500px] p-[24px] m-auto">
                  <div className="flex justify-between border-b-[1px] border-[#E8ECEF] h-[40px] items-center">
                    <h6>Cart</h6>
                    <div className="flex">
                      <Image
                        src={cartIcon}
                        width={24}
                        height={24}
                        alt="cartIcon"
                        className="cursor-pointer"
                        onClick={handleClickCart}
                      />
                      {totalQuantity > 0 && (
                        <div className="w-6 h-6 flex justify-center items-center text-white bg-black rounded-[12px] ml-2 ">
                          {totalQuantity}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between border-b-[1px] border-[#E8ECEF] h-[40px] items-center">
                    <h6>Wishlist</h6>
                    <Image
                      src={cartIcon}
                      width={24}
                      height={24}
                      alt="cartIcon"
                      className="cursor-pointer"
                    />
                  </div>
                 
                  {!hasUser ? (
                     <button
                     type="button"
                     className="bg-black w-full text-white py-2 px-4 rounded mt-5"
                     onClick={handleClick}
                   >
                     Sign In
                   </button>
                  ) : (
                    <button
                      className="bg-black w-full text-white py-2 px-4 rounded mt-5 "
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )}
                  <div className="flex mt-5 gap-6">
                    <Image
                      src={InstagramIconBlack}
                      width={24}
                      height={24}
                      alt="Instagram Icon"
                    />
                    <Image
                      src={FacebookIconBlack}
                      width={24}
                      height={24}
                      alt="Facebook Icon"
                    />
                    <Image
                      src={youtubeIconBlack}
                      width={24}
                      height={24}
                      alt="YouTube Icon"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          src={BlackLogo}
          width={70}
          height={24}
          alt="logo"
          className="mt-1 ml-1"
        />
      </div>

      {/* Desktop Logo */}
      <Image
        src={BlackLogo}
        width={105}
        height={24}
        alt="logo"
        className="sm:flex hidden sm:ml-5"
      />
      <Navbar />

      {/* Action Icons */}
      <div className="flex gap-4 items-center">
        <Image
          src={searchIcon}
          width={24}
          height={24}
          alt="Search"
          className="cursor-pointer sm:flex hidden"
        />
        {!hasUser ? (
          <Image
            src={userIcon}
            width={24}
            height={24}
            alt="User"
            className="cursor-pointer sm:flex hidden"
            onClick={handleSignIn}
          />
        ) : (
          <button
            className="bg-black text-white py-1 px-3 rounded text-sm sm:flex hidden"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        <Image
          src={cartIcon}
          width={24}
          height={24}
          alt="Cart"
          className="cursor-pointer mr-[32px] sm:mr-3"
          onClick={handleClickCart}
        />
        {totalQuantity > 0 && (
          <div className="w-6 h-6 flex justify-center items-center text-white bg-black rounded-[12px] ml-[-25px]">
            {totalQuantity}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
