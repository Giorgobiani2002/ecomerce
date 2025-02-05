"use client";
import { BlackLogo } from "@/utility/images/ImgExport";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  fullName: string;
  userName: string;
  email: string;
  password: string;
}

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  const RouterPush = () => {
    router.push("/sign-in");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await axios.post("http://localhost:3001/auth/signup", data);
      if (res.status === 201) {
        alert("You have registered successfully!");

        setTimeout(() => {
          // setIsLoading(false);
          router.push("/sign-in");
        }, 3000);
      }
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setError("User Already Exists");
      } else {
        setError(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  return (
    <div className="flex flex-col smLarge:flex-row max-w-[1600px] items-center w-full">
      <div className="relative hidden smLarge:flex w-6/12  h-screen max-h-[1080px]">
        <Image
          src="/AuthImage.png"
          layout="fill"
          objectFit="cover"
          alt="mobileBackground"
          className="z-0"
        />

        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Image
            src={BlackLogo}
            width={105}
            height={24}
            alt="LOGO"
            className="z-10"
          />
        </div>
      </div>

      <div className="flex justify-center items-center smLarge:hidden relative max-w-[500px] w-full h-[500px] m-auto">
        <Image
          src="/AuthImage.png"
          layout="fill"
          objectFit="cover"
          alt="mobileBackground"
          className="z-0 m-auto"
        />

        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Image
            src={BlackLogo}
            width={105}
            height={24}
            alt="LOGO"
            className="z-10"
          />
        </div>
      </div>
      

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-[#FEFEFE] max-w-[456px] w-full p-8  m-auto"
      >
        <h2 className="text-[#141718] text-[40px] leading-10 font-medium">
          Sign up
        </h2>
        <p className="mt-[24px] font-normal text-[16px] leading-6 text-[#6C7275]">
          Already have an account?{" "}
          <button onClick={RouterPush} className="text-[#38CB89]">
            Sign in
          </button>
        </p>

        <div className="flex flex-col mb-4 mt-6">
          <label htmlFor="name" className="block">
            Your Name
          </label>
          <input
            type="text"
            id="fullName"
            className="border-b-[1px] border-b-black py-2"
            {...register("fullName", {
              required: "This is required",
              maxLength: { value: 20, message: "Max length exceeded" },
            })}
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="block">
            Username
          </label>
          <input
            type="text"
            id="userName"
            className="border-b-[1px] border-b-black py-2"
            {...register("userName", {
              required: "This is required",
              maxLength: { value: 15, message: "Max length exceeded" },
            })}
          />
          {errors.userName && (
            <span className="text-red-500 text-sm">
              {errors.userName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="block">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border-b-[1px] border-b-black py-2"
            {...register("email", {
              required: "This is required",
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border-b-[1px] border-b-black py-2"
            {...register("password", {
              required: "This is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="flex items-center text-center">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms" className="ml-2">
            I agree with Privacy Policy and Terms of Use
          </label>
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded mt-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
