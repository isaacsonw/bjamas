/** @format */

import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Redux/store';
import { Product } from '../Products/productData';
import Image from 'next/image';
import { Button } from '@components/Button';
import styled from 'styled-components';

const CardWrapper = styled.div`
  .btn {
    visibility: hidden;
    transform: translateY(-20px);
    opacity: 0;
    transition: 0.3s ease-out;
  }
  .card:hover {
    cursor: pointer;
    .btn {
      visibility: visible;
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

interface Props {
  data: Product;
}

const ProductCard: FC<Props> = ({ data }: Props) => {
  const { imageUrl, category, prodcutName, price, bestSeller } = data;

  return (
    <CardWrapper className=" flex flex-col md:w-56 md:ml-8 mb-12">
      {bestSeller && <p>{bestSeller}</p>}
      <div className=" card relative">
        <Image src={imageUrl} />
        <div className="btn absolute bottom-1 w-full">
          <Button onClick={() => []} text="ADD TO CART" />
        </div>
      </div>

      <p className="text-gray-500 font-bold">{category}</p>
      <h1 className=" text-2xl font-bold">{prodcutName}</h1>
      <p className=" text-xl text-gray-500 font-normal">
        <span className="text-sm">$</span>
        {price}
      </p>
    </CardWrapper>
  );
};

export default ProductCard;
