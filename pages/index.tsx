/** @format */

import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Layout from '../Layout/index';
import { Header } from '@components/Header';
import { Products } from '@components/Products';
import { ProdutsDatas } from '../components/Products/productData';
import { getProducts } from 'Redux/features/productsSlice';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => await dispatch(getProducts(ProdutsDatas?.products)))();
  }, [ProdutsDatas?.products]);

  return (
    <Layout>
      <div className=" h-full w-full flex items-center flex-col justify-center">
        <Header />
        <Products />
      </div>
    </Layout>
  );
};

export default Home;
