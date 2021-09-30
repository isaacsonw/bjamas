/** @format */

import React, { FC } from 'react';
import Image from 'next/image';
import LOGO from '../../public/Group.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { cartItemsData } from '../../Redux/features/cartSlice';
import { openCart } from '../../Redux/features/cartSlice';

const NavigationBar: FC = ({}) => {
  const cartCount = useSelector(cartItemsData);
  const dispatch = useDispatch();
  return (
    <div className="flex fixed  right-0 left-0 top-0  z-50 h-12 mx-5 md:mx-24 justify-between items-center bg-white  border-b py-8">
      <Image src={LOGO} alt="" />
      <div
        onClick={() => dispatch(openCart())}
        className="flex relative cursor-pointer">
        <AiOutlineShoppingCart size={30} />
        {/* {cartCount?.length ? (
          <div
            style={{ height: 12, width: 12 }}
            className="absolute flex justify-center items-center  bg-black -right-1 bottom-0 top-6">
            <span
              style={{ fontSize: 9 }}
              className="text-xs font-semibold text-white  ">
              {cartCount?.length}
            </span>
          </div>
        ) : null} */}
        <div
          style={{ height: 12, width: 12 }}
          className="absolute flex justify-center items-center  bg-black -right-1 bottom-0 top-6">
          <span
            style={{ fontSize: 9 }}
            className="text-xs font-semibold text-white  ">
            {cartCount?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
