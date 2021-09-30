/** @format */

import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, cartItemsData } from 'Redux/features/cartSlice';
import { Product } from '../Products/productData';
import Image from 'next/image';
import { Button } from '@components/Button';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';

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
  .in-cart {
    visibility: hidden;
    transform: scaleY(0);
    opacity: 0;
    transition: 0.3s ease-out;
  }
  .card:hover {
    .in-cart {
      visibility: visible;
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

interface Props {
  data: Product;
}

const ProductCard: FC<Props> = ({ data }: Props) => {
  const { imageUrl, category, prodcutName, price, bestSeller } = data;
  const dispatch = useDispatch();
  const cartData = useSelector(cartItemsData);
  const [exist, setExist] = useState([]);

  useEffect(() => {
    cartData?.length &&
      //@ts-ignore
      cartData?.map((item) => setExist([...exist, item?.prodcutName]));
  }, [exist]);

  return (
    <CardWrapper className=" flex flex-col md:w-56 md:ml-8 mb-12">
      {bestSeller && <p>{bestSeller}</p>}
      <div className=" card relative">
        <Image src={imageUrl} />
        {
          //@ts-ignore
          !exist.includes(prodcutName) ? (
            <div className="btn absolute bottom-1 w-full">
              <Button
                onClick={() => {
                  dispatch(addToCart(data));
                }}
                text="ADD TO CART"
              />
            </div>
          ) : (
            <div className="in-cart absolute bottom-1 bg-opacity-50 bg-white h-80 flex justify-center items-center w-full">
              <h1 className="text-black text-xl">IN CART</h1>
            </div>
          )
        }
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
