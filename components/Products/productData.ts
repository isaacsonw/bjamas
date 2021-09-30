/** @format */
import P1 from '../../assets/Bejamas Recruitment task/P-1.png';
import P2 from '../../assets/Bejamas Recruitment task/P-2.png';
import P3 from '../../assets/Bejamas Recruitment task/P-3.png';
import P4 from '../../assets/Bejamas Recruitment task/P-4.png';
import P5 from '../../assets/Bejamas Recruitment task/P-5.png';
import P6 from '../../assets/Bejamas Recruitment task/P-6.png';

export type Filters =
  | 'People'
  | 'Premium'
  | 'Pets'
  | 'Food'
  | 'Landmarks'
  | 'Cities'
  | 'Nature';
export type PriceRange =
  | 'Lower than $20'
  | '$20 - $100'
  | '$100 - $200'
  | 'More than $200';

export interface Product {
  id: string;
  imageUrl: any;
  category: string;
  prodcutName: string;
  price: number;
  bestSeller?: string;
}

export interface ProdutsDataObj {
  filters: {
    categories: Filters[];
    priceRange: PriceRange[];
  };
  products: Product[];
}

export const ProdutsDatas: ProdutsDataObj = {
  filters: {
    categories: [
      'People',
      'Premium',
      'Pets',
      'Food',
      'Landmarks',
      'Cities',
      'Nature',
    ],
    priceRange: [
      'Lower than $20',
      '$20 - $100',
      '$100 - $200',
      'More than $200',
    ],
  },
  products: [
    {
      id: '001',
      imageUrl: P1,
      category: 'Food',
      prodcutName: 'Architecture',
      price: 201.34,
    },
    {
      id: '002',
      imageUrl: P3,
      category: 'Landmarks',
      prodcutName: 'Egg Ballon',
      price: 45.34,
    },
    {
      id: '003',
      imageUrl: P5,
      category: 'People',
      prodcutName: 'Red Bench',
      price: 3.99,
    },
    {
      id: '004',
      imageUrl: P5,
      category: 'People',
      prodcutName: 'Red Bench',
      price: 3.99,
    },
    {
      id: '005',
      imageUrl: P2,
      category: 'People',
      prodcutName: 'Red Bench',
      price: 3.99,
    },
    {
      id: '006',
      imageUrl: P6,
      category: 'People',
      prodcutName: 'Red Bench',
      price: 3.99,
    },
    {
      id: '007',
      imageUrl: P6,
      category: 'People',
      prodcutName: 'Red Bench',
      price: 3.99,
    },
    {
      id: '008',
      imageUrl: P1,
      category: 'Food',
      prodcutName: 'Architecture',
      price: 201.34,
    },
  ],
};
