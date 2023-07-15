import "./index.module.scss";
import {useParams} from "react-router-dom";
import React from "react";
import {useGetCategoriesQuery} from "../../features/api/apiSlice";
import ProductsContainer from "../../components/ProductsContainer";
import NotFound from "../NotFound";

export default function ProductByCategoryPage() {
  const {category_id} = useParams();

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCategoriesQuery(category_id);

  const products = data?.data ?? [];
  const category = data?.category ?? {};

  return (
    data?.status === "ERR" ?
      <NotFound/> :
      <ProductsContainer title={category?.title ?? ""}
                         onlySales={false}
                         productsData={products || []}
                         isLoading={isLoading}
                         isSuccess={isSuccess}
                         isError={isError}
                         error={error}/>
  );
}
