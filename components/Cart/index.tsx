/** @format */

import { Button } from '@components/Button';
import { MdClose } from 'react-icons/md';
import React, { FC } from 'react';

import {
  cartToggle,
  closeCart,
  cartItemsData,
  clearCart,
} from 'Redux/features/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Image from 'next/image';

const CartWrapper = styled.div`
  visibility: ${({ isOpen }: any) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }: any) =>
    isOpen ? 'translateY(5px)' : 'translateY(-30px)'};
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }: any) => (isOpen ? '1' : '0')};
`;

export const Cart: FC = () => {
  const toggle = useSelector(cartToggle);
  const cartItems = useSelector(cartItemsData);
  const dispatch = useDispatch();

  return (
    <CartWrapper
      //@ts-ignore
      isOpen={toggle}
      className="flex fixed overflow-y-auto bg-white right-5 md:right-24 top-12 z-50 flex-col justify-between w-80 md:w-96 max-h-72 px-6 mt-3  py-4 border-4 ">
      <div>
        <MdClose
          onClick={() => dispatch(closeCart())}
          size={30}
          className="float-right cursor-pointer"
        />
      </div>

      <section>
        {/* @ts-ignore */}
        {cartItems.length ? (
          //@ts-ignore
          cartItems.map((item) => (
            <div
              //@ts-ignore
              key={item?.id}
              className="flex justify-between items-center border-b-2 pb-4 my-8">
              <div>
                <h1 className=" font-bold mb-1">
                  {/* @ts-ignore */}
                  {item.prodcutName || 'Product name'}
                </h1>
                <h1 className=" font-light text-2xl text-gray-500">
                  <span className=" text-lg">$</span>
                  {/* @ts-ignore */}
                  {item.price || '300000'}
                </h1>
              </div>
              <div className="relative overflow-hidden h-20 w-40">
                {/* @ts-ignore */}
                <Image
                  //@ts-ignore
                  src={item.imageUrl}
                  alt=""
                  //@ts-ignore
                  objectFit
                  layout="fill"
                />
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center py-8">Your cart is empty</h1>
        )}
      </section>

      <Button text="CLEAR" onClick={() => dispatch(clearCart())} outline />
    </CartWrapper>
  );
};
