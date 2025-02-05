import { SwipperSlidesArr2T } from '@/commons/services/swipperSlides';
import Image from 'next/image';
import React from 'react';
import IsHeart from '../__atoms/IsHeart';
import { it } from 'node:test';

type ProductCardSwipperProps = {
  item: SwipperSlidesArr2T;
  hoverIndex: null | number;
  index: number;
};

const ProductCardSwipper: React.FC<ProductCardSwipperProps> = ({
  item,
  hoverIndex,
  index,
}) => {
  return (
    <div>
      <div className='relative'>
        <Image src={item.img} width={262} height={349} alt='product Image' />
        <div className='absolute top-[16px] left-[16px] flex flex-col gap-[8px]'>
          {item.isNew && (
            <div className='w-[67px] h-[24px] rounded-[4px] bg-white  flex justify-center items-center'>
              <span className='Font-Inter font-bold text-[16px] leading-[16px] text-[#141718]'>
                {item.isNew}
              </span>
            </div>
          )}
          {item.discountPrecent && (
            <div className='w-[67px] h-[24px] bg-[#38CB89] rounded-[4px] flex justify-center items-center'>
              <span className='Font-Inter font-bold text-[16px] leading-[16px] text-white '>
                -{item.discountPrecent}%
              </span>
            </div>
          )}
        </div>
        {hoverIndex === index && (
          <button className='absolute top-[16px] right-[16px] w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center'>
            <IsHeart />
          </button>
        )}
        <div className='absolute bottom-[16px] left-[16px]'>
          {hoverIndex === index && (
            <button className='w-[230px] h-[46px] rounded-[8px] flex justify-center items-center bg-[#141718]'>
              <span className='Font-Inter font-normal text-[16px] leading-[28px] text-white'>
                Add to Cart
              </span>
            </button>
          )}
        </div>
      </div>
      <div className='flex flex-col mt-[12px]'>
        <div className='flex gap-[2px] '>
          {item.stars.map((star) => (
            <div>
              <Image src={star} width={16} height={16} alt='stars' />
            </div>
          ))}
        </div>
        <div className='flex flex-col items-start '>
          <span className='mt-[4px]'>{item.name}</span>
          <p className='mt-[4px]'>
            <span>${item.price}</span>
            <span className='line-through'> ${item.oldPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSwipper;
