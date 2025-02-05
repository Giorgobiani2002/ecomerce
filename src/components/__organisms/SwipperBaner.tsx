'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwipperSlidesArr } from '@/commons/services/swipperSlides';
import Image from 'next/image';
import SwpperArrowR from '../__atoms/SwpperArrowR';
import SwipperArrowL from '../__atoms/SwipperArrowL';

const SwipperBaner = () => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (paginationRef.current) {
      setSwiperReady(true);
    }
  }, []);

  const handleSlideChange = (swiper: any) => {
    setIndex(swiper.realIndex);
  };

  return (
    <section className='relative max-w-[1120px] w-full h-[304px] ss:h-[536px]'>
      {swiperReady && (
        <Swiper
          className='mySwiper  w-full h-full'
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          loop={true}
          cssMode={true}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Autoplay]}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {SwipperSlidesArr.map((item, index) => {
            return (
              <SwiperSlide className='swiper-slide'>
                <Image src={item.img} width={1120} height={537} alt='slide' />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      <div ref={paginationRef} className='custom-pagination' />

      <button className='custom-prev'>
        <SwipperArrowL index={index} />
      </button>
      <button className='custom-next'>
        <SwpperArrowR index={index} SwipperSlidesArr={SwipperSlidesArr} />
      </button>

      <div className='w-full flex items-center ss:justify-between  pt-[32px] pb-[40px] flex-col  ss:flex-row'>
        <div className='font-poppins font-normal text-[40px] md:text-[72px] leading-[44px] md:leading-[76px]  tracking-[-2px] text-[#141718]'>
          <p>
            Simply Unique <span className='text-[#6C7275]'>/</span>
          </p>
          <p>
            Simply Better <span className='text-[#6C7275]'>.</span>
          </p>
        </div>
        <div className='max-w-[313px] md:max-w-[425px] w-full flex items-center  justify-start '>
          <p className='p-[29px] w-full font-poppins font-semibold md:font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[26px]   text-[#6C7275]'>
            <span className='text-[#141718]'>3legant</span>
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwipperBaner;
