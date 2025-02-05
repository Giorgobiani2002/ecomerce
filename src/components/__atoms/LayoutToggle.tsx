import { Sort1, Sort2, Sort3, Sort4 } from "@/utility/images/ImgExport";
import Image from "next/image";
import React from "react";

const LayoutToggle = ({
  layout,
  setLayout,
}: {
  layout: string;
  setLayout: Function;
}) => {
  return (
    <div
      className={`${
        layout == "Sort1" &&
        "col-start-2 flex justify-between sm:flex-row flex-col items-center gap-y-[10px]"
      } `}
    >
      {layout == "Sort1" ? (
        <div className="w-full sm:w-fit">
          <h4 className="font-bold text-xl hidden sm:block">Living Room</h4>
          <div className="sm:hidden flex justify-between items-center ">
            <h4 className="font-bold text-xl ">Filter:</h4>
            <select
              className="py-[14px] border-[2px] border-black max-w-[200px] w-full rounded-lg"
              name=""
              id=""
            >
              <option value="LivingRoom">Living Room</option>
              <option value="AllRoom">All Room</option>
              <option value="BedRoom">Bed Room</option>
            </select>
          </div>
        </div>
      ) : null}
      <div className="flex gap-x-[32px] items-center">
        <h5 className="">Sort By:</h5>
        <div className="flex shrink-0 gap-x-[10px]">
          <button
            className={`${layout == "Sort1" ? "bg-[#E8ECEF]" : "bg-white"} `}
            onClick={() => setLayout("Sort1")}
          >
            <Image src={Sort1} alt="Sort icon" />
          </button>
          <button
            onClick={() => setLayout("Sort2")}
            className={`${layout == "Sort2" ? "bg-[#E8ECEF]" : "bg-white"}`}
          >
            <Image src={Sort2} alt="Sort Icon" />
          </button>
          <button
            onClick={() => setLayout("Sort3")}
            className={`${layout == "Sort3" ? "bg-[#E8ECEF]" : "bg-white"} `}
          >
            <Image src={Sort3} alt="Sort Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutToggle;
