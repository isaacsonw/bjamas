/** @format */

import { Button } from '@components/Button';
import { MdClose } from 'react-icons/md';
import React, { FC } from 'react';

import { toggleCart, cartToggle } from 'Redux/features/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const CartWrapper = styled.div`
  visibility: ${({ isOpen }: any) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }: any) =>
    isOpen ? 'translateY(5px)' : 'translateY(-30px)'};
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }: any) => (isOpen ? '1' : '0')};
`;

export const Cart: FC = () => {
  const toggle = useSelector(cartToggle);
  const dispatch = useDispatch();

  return (
    <CartWrapper
      //@ts-ignore
      isOpen={toggle}
      className="flex fixed overflow-y-auto bg-white right-5 md:right-24 top-12 z-50 flex-col justify-between w-80 md:w-96 max-h-72 px-4 mt-3  py-4 border-4 ">
      <div>
        <MdClose
          onClick={() => dispatch(toggleCart())}
          size={30}
          className="float-right cursor-pointer"
        />
      </div>

      <h1>Item</h1>
      <h1>Item</h1>
      <h1>Item</h1>

      <Button text="CLEAR" onClick={() => []} outline />
    </CartWrapper>
  );
};
