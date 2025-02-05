'use client';

import Image from 'next/image';

import {
  livingRoom,
  badRoom,
  kitchen,
  ArrowRight,
} from '@/utility/images/ImgExport';

const CategotySection = () => {
  return (
    <section className=' max-w-[1120px] w-full mt-[240px] flex gap-[24px] flex-col ss:flex-row'>
      <div className='relative'>
        <div className='absolute top-[32px] md:top-[48px] left-[32px] md:left-[48px]'>
          <p className='font-poppins font-medium text-[28px] md:text-[34px] leading-[38px] tracking-tighter-[-0.6px]  text-[#141718]'>
            Living Room
          </p>
          <button className='font-medium text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718] border-b-[1px] border-[#141718] flex items-center'>
            Shop Now
            <Image
              src={ArrowRight}
              width={20}
              height={20}
              alt='arrow'
              className='ml-[4px]'
            />
          </button>
        </div>
        <Image src={livingRoom} width={548} height={664} alt='livingRoomImg' />
      </div>
      <div className='flex flex-col gap-[24px]'>
        <div className='relative'>
          <Image src={badRoom} width={548} height={664} alt='badRoomImg' />
          <div className='absolute bottom-[40px] left-[32px]'>
            <p className='font-poppins font-medium  text-[28px] md:text-[34px] leading-[38px] tracking-tighter-[-0.6px]  text-[#141718]'>
              Bed Room
            </p>
            <button className='font-medium text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718] border-b-[1px] border-[#141718] flex items-center'>
              Shop Now
              <Image
                src={ArrowRight}
                width={20}
                height={20}
                alt='arrow'
                className='ml-[4px]'
              />
            </button>
          </div>
        </div>
        <div className='relative'>
          <Image src={kitchen} width={548} height={664} alt='Kitchen' />
          <div className='absolute bottom-[40px] left-[32px] '>
            <p className='font-poppins font-medium  text-[28px] md:text-[34px] leading-[38px] tracking-tighter-[-0.6px]  text-[#141718]'>
              Kitchen
            </p>
            <button className='font-medium text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718] border-b-[1px] border-[#141718] flex items-center '>
              Shop Now
              <Image
                src={ArrowRight}
                width={20}
                height={20}
                alt='arrow'
                className='ml-[4px]'
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategotySection;
