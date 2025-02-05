'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import SwipperArrowL from '../__atoms/SwipperArrowL';
import { productf } from '@/commons/services/productDetails';
import SwpperArrowRR from '../__atoms/SwipperArrowRR';

const SwipperProduct2 = () => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const [index, setIndex] = useState(0);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (paginationRef.current) {
      setSwiperReady(true);
    }
  }, []);

  const handleSlideChange = (swiper: any) => {
    setIndex(swiper.realIndex);
  };

  const handleThumbnailClick = (index: number) => {
    swiperInstance.slideTo(index);
  };

  return (
    <div className='relative max-w-[547px] w-full h-[414px] sm:h-[728px] '>
      {swiperReady && (
        <Swiper
          className='mySwiper3  w-full h-full'
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          loop={true}
          cssMode={true}
          navigation={{
            prevEl: '.custom-prev3',
            nextEl: '.custom-next3',
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Autoplay]}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onInit={(swiper) => setSwiperInstance(swiper)}
        >
          {productf.images.map((item, index) => {
            return (
              <SwiperSlide className='swiper-slide3'>
                <Image src={item} width={1120} height={537} alt='slide' />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <div ref={paginationRef} className='custom-pagination3' />

      <button className='custom-prev3'>
        <SwipperArrowL index={index} />
      </button>
      <button className='custom-next3'>
        <SwpperArrowRR index={index} productArr={productf.images} />
      </button>

      <div className='max-w-[547px] w-full mt-[24px] flex justify-between'>
        {productf.images.map((item, idx) => (
          <div
            key={idx}
            className={`thumbnail ${
              idx === index ? 'border-2 border-[#141718]' : ''
            }`}
            onClick={() => handleThumbnailClick(idx)}
            style={{ cursor: 'pointer' }}
          >
            <div className='max-w-[167px] w-full max-h-[167px] h-full overflow-hidden flex justify-center items-center'>
              <Image
                src={item}
                width={167}
                height={167}
                alt={`thumbnail-${idx}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipperProduct2;
