import ProductDetails from '@/components/__molecules/ProductDetails';
import SwiperProduct from '@/components/__organisms/SwiperProduct';
import SwipperProduct2 from '@/components/__organisms/SwipperProduct2';
import { ArrowRight } from '@/utility/images/ImgExport';
import Image from 'next/image';
import React from 'react';

const Product = () => {
  return (
    <div className='w-full flex-col flex  items-center '>
      <div className='max-w-[1440px] w-full flex-col items-center sm:items-start sm:flex-row flex justify-center   px-[32px] '>
        <SwipperProduct2 />
        <ProductDetails />
      </div>
      <div className='sm:mt-[200px] max-w-[1440px] w-full flex flex-col items-center px-[32px] '>
        <div className='max-w-[1120px] w-full my-[48px] flex justify-between items-end'>
          <h3 className='font-poppins font-medium text-[40px] leading-[44px] tracking-tighter-[-0.4px]  text-[#141718]'>
            You might also like
          </h3>
          <button className='font-poppins text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718] flex items-center border-b-[1px] border-[#141718]'>
            More Products
            <Image
              src={ArrowRight}
              width={20}
              height={20}
              alt='arrow'
              className='ml-[4px]'
            />
          </button>
        </div>
        <div className='flex self-end   '>
          <SwiperProduct />
        </div>
      </div>
    </div>
  );
};

export default Product;
