"use client";

import { heart } from "@/utility/images/ImgExport";
import axios from "axios";
import { getCookies } from "cookies-next";
import Image from "next/image";

type AddToCartSwipperProps = {
  productId?: string;
};

const AddToCart: React.FC<AddToCartSwipperProps> = ({ productId }) => {
  const handleAddToCart = async () => {
    try {
      const token = getCookies().auth_token;
      const userId = getCookies().auth_name;

      if (!token) {
        console.error("No JWT token found in cookies");
        alert("Please sign-in to add product in cart !");
        return;
      }

      if (!userId) {
        console.error("No userId found in cookies");
        return;
      }

      console.log("Token:", token);
      console.log("User ID:", userId);

      const response = await axios.get(
        `http://localhost:3001/products/${productId}`
      );
      const product = response.data;

      console.log("Product details:", product);

      const orderData = {
        userId,
        products: [
          {
            productId: product._id,
            name: product.name,
            price: product.price,
            quantity: 1,
            imageUrl: product.ProductImage,
          },
        ],
      };

      console.log(orderData);

      const orderResponse = await axios.post(
        "http://localhost:3001/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Order created:", orderResponse.data);
      alert("Product Added in cart, Please Check !");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="max-w-[508px] w-full flex-col mt-[56px] ">
      <div className="w-full flex gap-[24px]">
        <div className="max-w-[357px] w-full h-[52px] border-[1px] border-[#141718] rounded-[8px] flex justify-center items-center">
          <Image src={heart} width={24} height={24} alt="heart" />
          <div>
            <span className="ml-[8px] mb-[16px] font-Inter font-normal text-[18px] leading-[32px]  text-[#141718] ">
              Wishlist
            </span>
          </div>
        </div>
      </div>
      <button
        className="mt-[16px] w-full h-[52px] rounded-[8px] bg-[#141718]"
        onClick={handleAddToCart}
      >
        <span className="font-Inter font-medium text-[18px] leading-[32px]  text-white ">
          Add to Cart
        </span>
      </button>
    </div>
  );
};

export default AddToCart;
