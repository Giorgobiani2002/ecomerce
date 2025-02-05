import {
  star,
  trayTableClr1,
  trayTableClr2,
  trayTableClr3,
  trayTableClr4,
  trayTableIMG1,
  trayTableIMG2,
  trayTableIMG3,
  trayTableIMG4,
} from '@/utility/images/ImgExport';
type ColorOptions = {
  color: string;
  img: any;
};

type Product = {
  id: number;
  name: string;
  reviews: number;
  description: string;
  images: any[];
  stars: (typeof star)[];
  category: string;
  measurements: string;
  price: number;
  oldPrice: number;
  wishlist: boolean;
  quantity: number;
  SKU: string;
  chooseColor: ColorOptions[];
};

export const productf: Product = {
  id: 1,
  name: 'Tray Table',
  reviews: 11,
  description:
    'Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.',
  images: [trayTableIMG1, trayTableIMG3, trayTableIMG4],
  stars: [star, star, star, star, star],
  category: 'living room',
  measurements: '17 1/2x20 5/8 "',
  price: 199.99,
  oldPrice: 400.0,
  wishlist: false,
  quantity: 1,
  SKU: '1117',
  chooseColor: [
    {
      img: trayTableClr1,
      color: 'black',
    },
    {
      img: trayTableClr2,
      color: 'brown',
    },
    {
      img: trayTableClr3,
      color: 'red',
    },
    {
      img: trayTableClr4,
      color: 'white',
    },
  ],
};
