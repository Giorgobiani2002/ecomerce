"use client";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
// import OrderSummary from "./OrderSummary";
// import useCartStore from "../__atoms/CartStore";
import Order from "./Order";
import { motion } from "framer-motion";
import OrderSummary from "./OrderSummary";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const [selectedMethod, setSelectedMethod] = useState("creditCard");
  const [order, isOrder] = useState(false);
  const [cart, setCart] = useState([]);

  const onSubmit = (data: any) => {
    console.log("Payment Data:", data);
    isOrder(true); // Show Order component on successful submission
  };

  const handleClick = () => {
    setTimeout(() => {
      axios.delete("http://localhost:3001/orders");
      router.push("/");
    }, 5000);
  };

  const paymentMethod = watch("paymentMethod", "creditCard");

  return (
    <div>
      {!order && (
        <motion.div
          className={`max-w-[1120px] w-full mt-8`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          viewport={{
            once: true,
          }}
        >
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-9">
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="max-w-[643px] w-full p-4 border border-gray-300 rounded-md flex flex-col gap-6 ml-auto mr-auto">
                  <h1 className="text-xl font-bold mb-4">
                    Contact Information
                  </h1>

                  {/* First Name */}
                  <div className="flex sm:flex-row flex-col justify-between">
                    <div className="flex flex-col sm:max-w-[285px] w-full">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-semibold mb-1"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your first name"
                      />
                      {errors.firstName &&
                        typeof errors.firstName.message === "string" && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.firstName.message}
                          </p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col sm:max-w-[285px] w-full">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-semibold mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your last name"
                      />
                      {errors.lastName &&
                        typeof errors.lastName.message === "string" && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.lastName.message}
                          </p>
                        )}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="phoneNumber"
                      className="text-sm font-semibold mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      type="number"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{9}$/,
                          message: "Enter a valid 9-digit phone number",
                        },
                      })}
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber &&
                      typeof errors.phoneNumber.message === "string" && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phoneNumber.message}
                        </p>
                      )}{" "}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                    {errors.email &&
                      typeof errors.email.message === "string" && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}{" "}
                  </div>
                </div>

                <div className="max-w-[643px] w-full mt-8 p-4 border border-gray-300 rounded-md flex flex-col gap-6 ml-auto mr-auto">
                  <h1 className="text-xl font-bold mb-4">Credit Card</h1>

                  {/* Credit Card Details */}
                  {selectedMethod === "creditCard" && (
                    <div className="space-y-4">
                      {/* Card Number */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="cardNumber"
                          className="text-sm font-semibold mb-1"
                        >
                          Card Number
                        </label>
                        <input
                          id="cardNumber"
                          type="text"
                          {...register("cardNumber", {
                            required: "Card number is required",
                            pattern: {
                              value: /^[0-9]{16}$/,
                              message: "Enter a valid 16-digit card number",
                            },
                          })}
                          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your card number"
                        />
                        {errors.cardNumber &&
                          typeof errors.cardNumber.message === "string" && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.cardNumber.message}
                            </p>
                          )}
                      </div>

                      {/* Expiration Date */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="expirationDate"
                          className="text-sm font-semibold mb-1"
                        >
                          Expiration Date
                        </label>
                        <input
                          id="expirationDate"
                          type="text"
                          {...register("expirationDate", {
                            required: "Expiration date is required",
                            pattern: {
                              value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                              message: "Enter a valid expiration date (MM/YY)",
                            },
                          })}
                          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="MM/YY"
                        />
                        {errors.expirationDate &&
                          typeof errors.expirationDate.message === "string" && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.expirationDate.message}
                            </p>
                          )}
                      </div>

                      {/* CVC */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="cvc"
                          className="text-sm font-semibold mb-1"
                        >
                          CVC
                        </label>
                        <input
                          id="cvc"
                          type="text"
                          {...register("cvc", {
                            required: "CVC is required",
                            pattern: {
                              value: /^[0-9]{3,4}$/,
                              message: "Enter a valid 3-4 digit CVC",
                            },
                          })}
                          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your CVC"
                        />
                        {errors.cvc &&
                          typeof errors.cvc.message === "string" && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.cvc.message}
                            </p>
                          )}
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`w-full p-2 rounded-md mt-3 ${
                      isValid
                        ? "bg-black text-white"
                        : "bg-gray-400 text-white cursor-not-allowed"
                    }`}
                    disabled={!isValid}
                    onClick={handleClick}
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
            <OrderSummary />
          </div>
        </motion.div>
      )}

      {order && <Order />}
    </div>
  );
}
