/** @format */

import React, { FC } from 'react';
import styled from 'styled-components';

//@ts-ignore
const ButtonWrapper = styled.div`
  background-color: ${({ outline }: any) => (outline ? 'white' : '#0e0e0e')};
  border: ${({ outline }: any) =>
    outline ? '2px solid #0e0e0e' : '2px solid #0e0e0e'};
  button {
    color: ${({ outline }: any) => (outline ? ' #0e0e0e' : 'white')};
  }
  width: 100%;
`;

interface Props {
  text: string;
  onClick: () => void;
  outline?: boolean;
}

export const Button: FC<Props> = ({ text, onClick, outline }: Props) => {
  return (
    <ButtonWrapper
      onClick={() => onClick()}
      //@ts-ignore
      outline={outline}
      className="bg-gray-900 flex justify-center items-center cursor-pointer px-6 py-1">
      <button className="text-white text-sm py-1">
        {text || 'ADD TO CART'}
      </button>
    </ButtonWrapper>
  );
};
