'use client';

import { ArrowRight } from '@/utility/images/ImgExport';
import Image from 'next/image';

const SwiperHeader = () => {
  return (
    <div className='max-w-[1120px] w-full my-[48px] flex justify-between items-end'>
      <h3 className='max-w-[149px] font-poppins font-medium text-[40px] leading-[44px] tracking-tighter-[-0.4px]  text-[#141718]'>
        New Arrivals
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
  );
};

export default SwiperHeader;
