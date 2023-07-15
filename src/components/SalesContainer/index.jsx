import React from "react";
import {useGetSalesQuery} from "../../features/api/apiSlice";
import ProductsContainer from "../ProductsContainer";

export default function SalesContainer() {

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetSalesQuery();

  return (
    <ProductsContainer title={"Sale"}
                       hideFilter={true}
                       productsData={(categories || []).slice(0, 3)}
                       isLoading={isLoading}
                       isSuccess={isSuccess}
                       isError={isError}
                       error={error}/>
  );
}
