"use client";
import { BlackLogo } from "@/utility/images/ImgExport";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { setCookie } from "cookies-next";
import { AxiosError } from "axios";
interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const route = useRouter();
  const [user, setUser] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });
  const router = useRouter();
  const RouterPush2 = () => {
    router.push("/sign-up");
  };
  const RouterPush = () => {
    router.push("/");
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await axios.post(
        "https://eccomerce-back-klm1.onrender.com/auth/signin",
        data
      );
      console.log(res.data.access_token);
      
      if (res.status === 201) {
        setCookie("auth_token", res.data.access_token, {
          maxAge: 60 * 60,
        });
        setCookie("auth_name", res.data.userId, {
          maxAge: 60 * 60,
        });
        alert("You have Logged successfully!");

        // setIsLoading(true);
        setTimeout(() => {
          // setIsLoading(false);
          router.push("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      
      if (error instanceof AxiosError && error.response?.status === 404) {
        setError("User Not Registered");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col smLarge:flex-row max-w-[1600px] items-center w-full">
      <div className="relative hidden smLarge:flex w-6/12 h-screen max-h-[1080px]">
        <Image
          src="/AuthImage.png"
          layout="fill"
          objectFit="cover"
          alt="mobileBackground"
          className="z-0"
        />

        {/* Logo */}
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
        {/* Background Image */}
        <Image
          src="/AuthImage.png"
          layout="fill"
          objectFit="cover"
          alt="mobileBackground"
          className="z-0 m-auto"
        />

        {/* Logo */}
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
        className="flex flex-col bg-[#FEFEFE] max-w-[456px] w-full p-8 smLarge:ml-[88px]"
      >
        <h2 className="text-[#141718] text-[40px] leading-10 font-medium">
          Sign In
        </h2>
        <p className="mt-[24px] font-normal text-[16px] leading-6 text-[#6C7275]">
          Don’t have an account yet?{" "}
          <button onClick={RouterPush2} className="text-[#38CB89]">
            Sign Up
          </button>
        </p>

        <div className="flex flex-col mb-4 mt-5">
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
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="ml-2">
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          className={`bg-black text-white py-2 px-4 rounded mt-4 ${
            !isValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isValid}
          
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
