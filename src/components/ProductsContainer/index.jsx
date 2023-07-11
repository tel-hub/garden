import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Category from "../Category";
import {useGetProductsQuery} from "../../features/api/apiSlice";
import {ROUTES} from "../../helpers/constants";
import Preloader from "../Preloader";
import s from "./index.module.scss";

export default function ProductsContainer({short = false}) {

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error, ...rest
  } = useGetProductsQuery();

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">Catalog</h1>
      </div>

      {isLoading ?
        <Preloader></Preloader> :
        isSuccess && products.length ?
          <div className="items-container">
            {products.slice(0, short ? 4 : products.length - 1).map((cat, index) => {
              return <Category key={index} id={cat.id} name={cat.name} image={cat.image}/>;
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
