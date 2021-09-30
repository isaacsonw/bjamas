/** @format */

import { Button } from '@components/Button';
import React, { FC } from 'react';
import Image from 'next/image';
import HeaderImage from '../../assets/dog.png';
import H1 from '../../assets/h-1.png';
import H2 from '../../assets/h-2.png';
import H3 from '../../assets/h-3.png';
import { Cart } from '../Cart/index';
import styled from 'styled-components';
import { openCart, addToCart } from 'Redux/features/cartSlice';
import { useDispatch } from 'react-redux';

const HeaderWrapper = styled.div`
  @media (max-width: 820px) {
    .details {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Header: FC = () => {
  const dispatch = useDispatch();

  //Test
  const data = {
    imageUrl: HeaderImage,
    prodcutName: 'Samurai King Resting',
    price: 564444,
  };

  return (
    <HeaderWrapper className="relative">
      <Cart />
      <div className="flex flex-col justify-between w-full mt-3 pb-5 border-b-4 ">
        <section className="flex items-center my-3 justify-between w-full">
          <h1 className="text-2xl font-bold">Samurai King Resting</h1>
          <div className="hidden md:block">
            <Button
              text="ADD TO CART"
              onClick={() => dispatch(addToCart(data))}
            />
          </div>
        </section>
        <section className="relative ">
          <Image src={HeaderImage} objectFit="fill" />
          <div style={{ bottom: 6 }} className=" px-7 py-2 absolute bg-white">
            <span>Photo of the day</span>
          </div>
        </section>
        <div className="md:hidden mt-5">
          <Button text="ADD TO CART" onClick={() => []} />
        </div>
        <section className="  flex  justify-between mt-5 py-4 w-full bg-white details">
          <aside className="md:w-1/2 mr-4">
            <h2 className=" font-bold">About the Samurai King Resting</h2>
            <h3 className="mt-2 font-bold text-gray-600">Pets</h3>
            <p className=" text-sm text-gray-400">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.So how did the classical
              Latin become so incoherent? According to McClintock, a 15th
              century typesetter likely scrambled part of Cicero's De Finibus in
              order to provide placeholder
            </p>
            <p className="mt-10 text-sm text-gray-400">
              text to mockup various fonts for a type specimen book. So how did
              theclassical Latin become so incoherent? According to McClintock.
            </p>
          </aside>
          <aside className="md:w-1/2 md:ml-4 mt-10 md:mt-0 self-end flex flex-col md:items-end">
            <h2 className="mb-4 font-bold">People also buy</h2>
            <div className="flex">
              <Image src={H1} />
              <div className="mx-7">
                <Image src={H2} />
              </div>
              <Image src={H3} />
            </div>
            <h3 className="mb-4 mt-12 font-bold">Details</h3>
            <p className=" text-xs text-gray-400 mb-2">
              Size: 1020 x 1020 pixel
            </p>
            <p className=" text-xs text-gray-400">Size: 15 mb</p>
          </aside>
        </section>
      </div>
    </HeaderWrapper>
  );
};
