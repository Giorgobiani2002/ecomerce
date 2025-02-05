'use client';
type SwpperArrowRProps = {
  index: number;
  SwipperSlidesArr: any[];
};

const SwpperArrowR: React.FC<SwpperArrowRProps> = ({
  index,
  SwipperSlidesArr,
}) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.66666 16H25.3333'
        stroke={index === SwipperSlidesArr.length - 1 ? '#6C7275' : '#141718'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M17.3333 24L25.3333 16'
        stroke={index === SwipperSlidesArr.length - 1 ? '#6C7275' : '#141718'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M17.3333 8L25.3333 16'
        stroke={index === SwipperSlidesArr.length - 1 ? '#6C7275' : '#141718'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default SwpperArrowR;
