import React, {useEffect, useState} from "react";
import ProductsContainer from "../../components/ProductsContainer";
import {useSelector} from "react-redux";
import {useGetProductsQuery} from "../../features/api/apiSlice";
import {applyProductFilter} from "../../features/helpers/functions";

export default function ProductsPage() {
  const {
    data: productsData,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery("all");

  console.log('ProductsPage', productsData);

  return (
    <ProductsContainer title={"All products"}
                       productsData={productsData?.data ?? []}
                       isLoading={isLoading}
                       isSuccess={isSuccess}
                       isError={isError}
                       error={error}/>
  );
}
