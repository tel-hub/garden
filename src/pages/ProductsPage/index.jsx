import React from "react";
import ProductsContainer from "../../components/ProductsContainer";
import {useGetProductsQuery} from "../../features/api/apiSlice";

export default function ProductsPage() {
  const {
    data: productsData,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery("all");

  return (
    <ProductsContainer title={"All products"}
                       onlySales={false}
                       productsData={productsData?.data ?? []}
                       isLoading={isLoading}
                       isSuccess={isSuccess}
                       isError={isError}
                       error={error}/>
  );
}
