/** @format */

import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Redux/store';
import Layout from '../Layout/index';
import {
  increment,
  decrement,
  incrementByAmount,
  clearProduts,
} from 'Redux/features/productsSlice';
import { Header } from '@components/Header';
import { Products } from '@components/Products';
import { selectCount } from 'Redux/features/productsSlice';

const Home: NextPage = () => {
  const value = useSelector(selectCount);
  const dispatch = useDispatch();

  console.log(value);

  return (
    <Layout>
      <div className=" h-full w-full flex items-center flex-col justify-center">
        <Header />
        <Products />
        {/* <h1 className="text-red-500">Hello World</h1>
        <h1 className="text-green-500 text-4xl">{value}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>by 10</button>
        <button onClick={() => dispatch(clearProduts())}>clear</button> */}
      </div>
    </Layout>
  );
};

export default Home;
