import React, {useEffect, useState} from "react";
import {useGetSalesQuery} from "../../features/api/apiSlice";
import Preloader from "../Preloader";
import s from "./index.module.scss";
import ProductItem from "../ProductItem";
import ProductsFilter from "../ProductsFilter";
import {applyProductFilter} from "../../features/helpers/functions";
import {useSelector} from "react-redux";

export default function SalesContainer({short = false}) {
  const {filter: filterState} = useSelector((state) => state.filter);
  const [productList, setProductList] = useState([]);

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error, ...rest
  } = useGetSalesQuery();

  useEffect(() => {
    if (categories?.length) {
      setProductList(short ? categories.slice(0, 3) : applyProductFilter(categories, filterState));
    }
  }, [categories, short, JSON.stringify(filterState)]);

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">{short ? "Sale" : "Products with sale"}</h1>
      </div>

      {short ? null : <ProductsFilter showSale={false}></ProductsFilter>}

      {isLoading ?
        <Preloader></Preloader> :
        isSuccess && categories.length ?
          <div className="items-container">
            {productList.length ? productList.map((product, index) => {
              return <ProductItem key={index} {...product}/>;
            }) : <p className="text-center wide">No Matches</p>}
          </div> : isError ?
            <div className="error-alert">
              {error}
            </div> :
            <p className="text-center">No Data</p>
      }
    </div>
  );
}
