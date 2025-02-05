'use client';

import { ArticleInfo } from '@/commons/services/articlesInfo';
import { ArrowRight } from '@/utility/images/ImgExport';
import Image from 'next/image';

const ArticlesSection = () => {
  return (
    <section className='max-w-[1120px] w-full mt-[0px] md:mt-[240px] flex flex-col '>
      <div className='max-w-[1120px] w-full my-[48px] flex justify-between items-end'>
        <h3 className='max-w-[149px] font-poppins font-medium text-[40px] leading-[44px] tracking-tighter-[-0.4px]  text-[#141718]'>
          Articles
        </h3>
        <button className='font-Inter text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718] flex items-center border-b-[1px] border-[#141718]'>
          More Articles
          <Image
            src={ArrowRight}
            width={20}
            height={20}
            alt='arrow'
            className='ml-[4px]'
          />
        </button>
      </div>
      <div className='flex flex-wrap justify-center gap-[24px]'>
        {ArticleInfo.map((item) => (
          <div className='flex flex-col'>
            <div>
              <Image src={item.img} width={357} height={325} alt='ROOM' />
            </div>
            <div>
              <h4 className='mt-[24px] font-poppins font-medium mb-[8px] text-[20px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718]'>
                {item.title}
              </h4>
              <button className='font-Inter text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718] flex items-center '>
                Read More
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
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
