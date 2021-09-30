/** @format */

import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProdutsDatas, Filters, PriceRange, Product } from './productData';
import ProductCard from '../ProductCard/index';
import { BiSliderAlt } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';
import { Button } from '@components/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  allProducts,
  productFilter,
  filterData,
} from 'Redux/features/productsSlice';

const ProductWrapper = styled.div`
  width: 100%;
  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  label {
    position: relative;
    cursor: pointer;
  }

  label:before {
    content: '';
    -webkit-appearance: none;
    background-color: white;
    border: 2px solid #333;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 8px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 16px;
  }

  input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 7px;
    width: 6px;
    height: 11px;
    border: solid #333;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  [type='radio']:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 7px;
    width: 6px;
    height: 11px;
    border: solid #333;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const FiltersComponent = ({ filters, setFilters, dispatch }: any) => (
  <>
    <div>
      <h1 className="font-bold">Category</h1>
      <div className="mt-7">
        {ProdutsDatas.filters.categories?.map((filter: Filters) => (
          <div key={filter} className=" my-3 cursor-pointer">
            <input
              //@ts-ignore
              onChange={(e) => {
                if (e.target.checked === false) {
                  const data = filters.filter(
                    (el: string) => el !== e.target.value
                  );
                  setFilters([...data]);
                  dispatch(productFilter([...data]));
                }
                if (e.target.checked) {
                  setFilters([...filters, e.target.value]);
                  dispatch(productFilter([e.target.value, ...filters]));
                }
              }}
              id={filter}
              type="checkbox"
              value={filter}
            />
            <label htmlFor={filter} className="cursor-pointer font-light">
              {filter}
            </label>
          </div>
        ))}
      </div>
    </div>
    <div className=" mt-14">
      <h1 className="font-bold">Price range</h1>
      <div className="mt-7">
        {ProdutsDatas.filters.priceRange?.map((range: PriceRange) => (
          <div key={range} className="cursor-pointer my-3 ">
            <input id={range} type="radio" name="pr" value={range} />
            <label htmlFor={range} className=" cursor-pointer font-light">
              {range}
            </label>
          </div>
        ))}
      </div>
    </div>
  </>
);

export const Products: FC = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const products = useSelector(allProducts);
  const filteredData = useSelector(filterData);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState([]);

  console.log(filteredData, 'SJJJJJ');

  const pData = useCallback(() => {
    return products?.filter((o) =>
      //@ts-ignore
      Object.keys(o).some((k: string) => filters.includes(o[k]))
    );
  }, [filters]);

  const data = pData()?.length ? pData() : products;

  return (
    <ProductWrapper>
      <div className="flex flex-col justify-between w-full mt-10 pb-5 ">
        <section className="flex items-center my-3 justify-between w-full">
          <h1 className="font-bold md:text-xl">
            Photography /{' '}
            <span className=" font-light text-gray-400">Premium Photos</span>
          </h1>
          <div className="hidden md:block">
            Sort By <span>Price</span>
          </div>
          <div className="md:hidden">
            <h1>
              <BiSliderAlt onClick={() => setToggleFilter(true)} size={25} />
            </h1>
          </div>
        </section>

        <section className="flex relative justify-center items-start mt-5">
          {toggleFilter ? (
            <aside className=" bg-white h-5/6 overflow-y-auto left-0 right-0 top-0 z-50 px-4 fixed w-full block md:hidden">
              <div className="flex absolute left-0 right-0 -top-3 h-16 px-3 items-center bg-gray-300 my-3 justify-between w-full">
                <h1 className="font-bold md:text-xl">
                  Photography /{' '}
                  <span className=" font-light text-gray-600">
                    Premium Photos
                  </span>
                </h1>
                <div className="hidden md:block">
                  Sort By <span>Price</span>
                </div>
                <div className="md:hidden">
                  <h1>
                    <BiSliderAlt
                      onClick={() => setToggleFilter(false)}
                      size={25}
                    />
                  </h1>
                </div>
              </div>
              <span className="block mt-20 h-full pb-7">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold">Filter</h1>
                  <div>
                    <RiCloseLine
                      onClick={() => setToggleFilter(false)}
                      size={35}
                    />
                  </div>
                </div>
                <FiltersComponent
                  setFilters={setFilters}
                  filters={filters}
                  dispatch={dispatch}
                />

                <div className="flex w-full justify-between py-5">
                  <div className="w-full mr-3">
                    <Button text="CLEAR" outline onClick={() => []} />
                  </div>
                  <div className="w-full ml-3">
                    <Button text="SAVE" onClick={() => []} />
                  </div>
                </div>
              </span>
            </aside>
          ) : null}
          <aside className=" relative w-1/3 hidden md:block">
            <FiltersComponent
              setFilters={setFilters}
              filters={filters}
              dispatch={dispatch}
            />
          </aside>
          <aside className="flex flex-wrap items-center justify-center md:justify-end w-full md:flex-1 ">
            {/* @ts-ignore */}
            {data.length &&
              //@ts-ignore
              data?.map((product: Product) => (
                <div key={product.id}>
                  <ProductCard data={product} />
                </div>
              ))}
          </aside>
        </section>
      </div>
    </ProductWrapper>
  );
};
