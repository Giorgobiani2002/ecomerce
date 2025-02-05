import DetailsMiniInfo from '@/components/__atoms/DetailsMiniInfo';
import SwiperHeader from '@/components/__atoms/SwiperHeader';
import Header from '@/components/__molecules/Header';
import ArticlesSection from '@/components/__organisms/ArticlesSection';
import CategotySection from '@/components/__organisms/CategotySection';
import LowerPriceSection from '@/components/__organisms/LowerPriceSection';
import SwiperProduct from '@/components/__organisms/SwiperProduct';
import SwipperBaner from '@/components/__organisms/SwipperBaner';

export default function Home() {
  return (
    <div className='w-full flex-col flex  items-center '>
      <div className='max-w-[1440px] w-full flex flex-col items-center px-[32px] '>
        <SwipperBaner />
      </div>
      <div className='max-w-[1440px] w-full flex flex-col items-center px-[32px] '>
        <CategotySection />
      </div>
      <div className='max-w-[1440px] w-full flex flex-col items-center px-[32px] '>
        <SwiperHeader />
      </div>
      <div className='max-w-[1440px] w-full flex flex-col items-center  '>
        <div className='flex self-end   '>
          <SwiperProduct />
        </div>
      </div>
      <div className='max-w-[1440px] w-full flex flex-col items-center px-[32px] '>
        <DetailsMiniInfo />
      </div>
      <div className='max-w-[1440px] w-full flex flex-col items-center  '>
        <LowerPriceSection />
      </div>
      <div className='max-w-[1440px] w-full flex flex-col items-center px-[32px] '>
        <ArticlesSection />
      </div>
    </div>
  );
}
