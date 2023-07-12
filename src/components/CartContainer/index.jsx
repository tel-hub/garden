import React, {useEffect, useState} from "react";
import {useGetProductsQuery} from "../../features/api/apiSlice";
import Preloader from "../Preloader";
import ProductItem from "../ProductItem";

export default function CartContainer({short = false}) {

  //const {
  //  data: products,
  //  isLoading,
  //  isSuccess,
  //  isError,
  //  error, ...rest
  //} = useGetProductsQuery("all");

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">Shopping cart</h1>
      </div>

      {/*{isLoading ?*/}
      {/*  <Preloader></Preloader> :*/}
      {/*  isSuccess && products.length ?*/}
      {/*    <div className="items-container">*/}
      {/*      {products.slice(0, short ? 4 : products.length - 1).map((product, index) => <ProductItem*/}
      {/*        key={index} {...product}/>)}*/}
      {/*    </div> : isError ?*/}
      {/*      <div className="error-alert">*/}
      {/*        {error}*/}
      {/*      </div> :*/}
      {/*      <p className="text-center">No Data</p>*/}
      {/*}*/}
    </div>
  );
}
