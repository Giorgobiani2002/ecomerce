import {
  swpperSlide1,
  swpperSlide3,
  swpperSlide2,
  productSlide1,
  productSlide2,
  productSlide3,
  productSlide4,
  productSlide5,
  productSlide6,
  productSlide7,
  productSlide8,
  star,
} from '@/utility/images/ImgExport';

export const SwipperSlidesArr = [
  {
    img: swpperSlide1,
  },
  {
    img: swpperSlide2,
  },
  {
    img: swpperSlide3,
  },
];

export type SwipperSlidesArr2T = {
  img: any;
  name: string;
  price: number;
  oldPrice?: number;
  stars: string[];
  isNew?: string;
  isHeart: boolean;
  discountPrecent?: number;
};

export const SwipperSlidesArr2: SwipperSlidesArr2T[] = [
  {
    img: productSlide1,
    name: 'Loveseat Sofa',
    price: 199.0,
    oldPrice: 400.0,
    stars: [star, star, star, star, star],
    isHeart: true,
    isNew: 'NEW',
    discountPrecent: 50,
  },
  {
    img: productSlide2,
    name: 'Table Lamp',
    price: 24.99,
    stars: [star, star, star, star, star],
    isHeart: false,
    isNew: 'NEW',
    discountPrecent: 50,
  },
  {
    img: productSlide3,
    name: 'Beige Table Lamp',
    price: 24.99,
    stars: [star, star, star, star, star],
    isHeart: false,
    isNew: 'NEW',
    discountPrecent: 50,
  },
  {
    img: productSlide4,
    name: 'Bamboo basket',
    price: 24.99,
    stars: [star, star, star, star, star],
    isHeart: false,
    isNew: 'NEW',
    discountPrecent: 50,
  },
  {
    img: productSlide5,
    name: 'Luxury Sofa',
    price: 299.0,
    oldPrice: 500.0,
    stars: [star, star, star, star, star],
    isHeart: false,
    isNew: 'NEW',
    discountPrecent: 50,
  },
  {
    img: productSlide6,
    name: 'Cozy Sofa',
    price: 299.99,
    stars: [star, star, star, star, star],
    isHeart: false,
    isNew: 'NEW',
    discountPrecent: 50,
  },
  {
    img: productSlide7,
    name: 'White Drawer unit',
    price: 89.99,
    stars: [star, star, star, star, star],
    isHeart: false,
    isNew: 'NEW',
    discountPrecent: 50,
  },
  {
    img: productSlide8,
    name: 'Black Brow Side table',
    price: 16.99,
    stars: [star, star, star, star, star],
    isHeart: false,
    isNew: 'NEW',
    discountPrecent: 50,
  },
];
