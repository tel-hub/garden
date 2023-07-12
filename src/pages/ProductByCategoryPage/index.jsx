import "./index.module.scss";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ProductItem from "../../components/ProductItem";
import {useGetCategoriesQuery} from "../../features/api/apiSlice";
import Preloader from "../../components/Preloader";

export default function ProductByCategoryPage() {
  const {category_id} = useParams();
  const [productList, setProductList] = useState([]);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCategoriesQuery(category_id);

  const products = data?.data ?? [];
  const category = data?.category ?? {};

  console.log("useGetCategoriesQuery", data, category, products);

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">{category?.title ?? ""}</h1>
      </div>

      {isLoading ?
        <Preloader></Preloader> :
        isSuccess && products.length ?
          <div className="items-container">
            {products.map((product, index) => <ProductItem
              key={index} {...product}/>)}
          </div> : isError ?
            <div className="error-alert">
              {error}
            </div> :
            <p className="text-center">No Data</p>
      }
    </div>
  );
}
