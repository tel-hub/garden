import React from "react";
import {useGetSalesQuery} from "../../features/api/apiSlice";
import ProductsContainer from "../../components/ProductsContainer";

export default function SalesPage() {

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetSalesQuery();

  return (
    <>
      <ProductsContainer title={"Products with sale"}
                         onlySales={true}
                         productsData={categories ?? []}
                         isLoading={isLoading}
                         isSuccess={isSuccess}
                         isError={isError}
                         error={error}/>
    </>
  );
}
