import React from "react";

export default function ShopS1() {
  return (
    <div className="max-w-[1440px] w-full flex justify-center ml-auto mr-auto">
      <div className="max-w-[1184px] w-full flex  justify-center pl-[32px] pr-[32px] bg-[url('/ShopBackground.jpg')] bg-cover bg-center h-[392px]">
        <div className="relative z-10 flex flex-col justify-center gap-y-[24px] items-center h-full">
          <p className="text-sm font-medium">Home &gt; Shop</p>
          <h1 className="text-4xl font-bold">Shop Page</h1>
          <p className="mt-2 text-lg">
            Let's design the place you always imagined.
          </p>
        </div>
      </div>
    </div>
  );
}
