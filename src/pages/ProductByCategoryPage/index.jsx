import "./index.module.scss";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ProductItem from "../../components/ProductItem";
import {useGetCategoriesQuery} from "../../features/api/apiSlice";
import Preloader from "../../components/Preloader";
import ProductsFilter from "../../components/ProductsFilter";
import {applyProductFilter} from "../../features/helpers/functions";
import {useSelector} from "react-redux";

export default function ProductByCategoryPage() {
  const {category_id} = useParams();
  const [productList, setProductList] = useState([]);
  const {filter: filterState} = useSelector((state) => state.filter);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCategoriesQuery(category_id);

  const products = data?.data ?? [];
  const category = data?.category ?? {};

  useEffect(() => {

    setProductList(applyProductFilter(products, filterState));
  }, [products, JSON.stringify(filterState)]);

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">{category?.title ?? ""}</h1>
      </div>

      <ProductsFilter></ProductsFilter>

      {isLoading ?
        <Preloader></Preloader> :
        isSuccess && products.length ?
          <div className="items-container">
            {productList.length ? productList.map((product, index) => <ProductItem
              key={index} {...product}/>) : <p className="text-center">No Match</p>}
          </div> : isError ?
            <div className="error-alert">
              {error}
            </div> :
            <p className="text-center">No Data</p>
      }
    </div>
  );
}
