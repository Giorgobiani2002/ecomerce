"use client";

import { ArrowRight } from "@/utility/images/ImgExport";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SwiperHeader = () => {
  const router = useRouter();
  const routerPush = () => {
    router.push("/shop");
  };

  return (
    <div className="max-w-[1120px] w-full my-[48px] flex justify-between items-end">
      <h3 className="max-w-[149px] font-poppins font-medium text-[40px] leading-[44px] tracking-tighter-[-0.4px]  text-[#141718]">
        New Arrivals
      </h3>
      <button
        className="font-poppins text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718] flex items-center border-b-[1px] border-[#141718]"
        onClick={routerPush}
      >
        More Products
        <Image
          src={ArrowRight}
          width={20}
          height={20}
          alt="arrow"
          className="ml-[4px]"
        />
      </button>
    </div>
  );
};

export default SwiperHeader;
