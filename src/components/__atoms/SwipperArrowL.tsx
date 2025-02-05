'use client';
type SwpperArrowLProps = {
  index: number;
};

const SwipperArrowL: React.FC<SwpperArrowLProps> = ({ index }) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.66669 16H25.3334'
        stroke={index === 0 ? '#6C7275' : '#141718'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6.66669 16L14.6667 24'
        stroke={index === 0 ? '#6C7275' : '#141718'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6.66669 16L14.6667 8'
        stroke={index === 0 ? '#6C7275' : '#141718'}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default SwipperArrowL;
