'use client';

import React, { useRef, useEffect, useState } from 'react';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; // Import Swiper's Scrollbar styles

import { SwipperSlidesArr2 } from '@/commons/services/swipperSlides';
import ProductCardSwipper from '../__molecules/ProductCardSwipper';
import { ArrowRight } from '@/utility/images/ImgExport';
import Image from 'next/image';

const SwiperProduct = () => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    if (paginationRef.current) {
      setSwiperReady(true);
    }
  }, []);

  return (
    <div className='max-w-[1280px] w-full  mx-auto h-full ' id='product'>
      <div className='relative '>
        {swiperReady && (
          <Swiper
            className='mySwiper2 w-full h-full'
            slidesPerView={'auto'}
            spaceBetween={24}
            loop={true}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            pagination={false}
            scrollbar={{
              el: paginationRef.current,
              hide: false,
              draggable: true,
              dragSize: 'auto',
            }}
            modules={[Navigation, Scrollbar]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
          >
            {SwipperSlidesArr2.map((item, index) => (
              <SwiperSlide
                key={`${item.name}${item.price}`}
                className='swiper-slide2'
                onMouseMove={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <ProductCardSwipper
                  item={item}
                  index={index}
                  hoverIndex={hoverIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div ref={paginationRef} className='swiper-scrollbar' />
      </div>
    </div>
  );
};

export default SwiperProduct;
