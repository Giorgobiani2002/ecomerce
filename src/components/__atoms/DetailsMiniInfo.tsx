'use client';

import { Info } from '@/commons/services/MiniInfo';
import Image from 'next/image';

const DetailsMiniInfo = () => {
  return (
    <section className=' max-w-[1120px] w-full mt-[240px] flex gap-[24px] flex-wrap justify-center'>
      {Info.map((item) => (
        <div
          key={item.id}
          className='flex grow basis-[152px] w-full h-[220px] pl-[32px]  flex-col justify-center bg-[#F3F5F7]'
        >
          <div className='mb-[16px]'>
            <Image src={item.img} width={48} height={48} alt='Icon' />
          </div>
          <div>
            <h5 className='mb-[8px] font-poppins font-normal text-[20px] leading-[28px] text-[#23262F]'>
              {item.title}
            </h5>
            <p className='font-poppins font-[400] text-[14px] leading-[24px] text-[#6C7275]'>
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DetailsMiniInfo;
