import React, {useEffect, useState} from "react";
import {useGetSalesQuery} from "../../features/api/apiSlice";
import Preloader from "../Preloader";
import s from "./index.module.scss";
import ProductItem from "../ProductItem";
import ProductsFilter from "../ProductsFilter";

export default function SalesContainer({short = false}) {

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error, ...rest
  } = useGetSalesQuery();

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">{short ? "Sale" : "Products with sale"}</h1>
      </div>

      {short ? null : <ProductsFilter></ProductsFilter>}

      {isLoading ?
        <Preloader></Preloader> :
        isSuccess && categories.length ?
          <div className="items-container">
            {categories.slice(0, short ? 3 : categories.length).map((product, index) => {
              return <ProductItem key={index} {...product}/>;
            })}
          </div> : isError ?
            <div className="error-alert">
              {error}
            </div> :
            <p className="text-center">No Data</p>
      }
    </div>
  );
}
