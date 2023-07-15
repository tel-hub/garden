import React, {useEffect, useState} from "react";
import {useGetProductsQuery} from "../../features/api/apiSlice";
import Preloader from "../Preloader";
import ProductItem from "../ProductItem";
import ProductsFilter from "../ProductsFilter";
import {applyProductFilter} from "../../features/helpers/functions";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ROUTES} from "../../features/helpers/constants";
import s from "../CategoryContainer/index.module.scss";

export default function ProductsContainer({
                                            hideFilter = false,
                                            short = false,
                                            showSale = true,
                                            title = "",
                                            productsData = [],
                                            isLoading = false,
                                            isSuccess = false,
                                            isError = false,
                                            error = ""
                                          }) {

  const [productList, setProductList] = useState([]);
  const {filter: filterState} = useSelector((state) => state.filter);

  useEffect(() => {
    if (productsData?.length) {
      setProductList(applyProductFilter(productsData, filterState));
    }
  }, [productsData, JSON.stringify(filterState)]);

  console.log("ProductsContainer", productsData, productList);

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">{title}</h1>

        {short ?
          <Link to={ROUTES.catalog.path} className={s.category_btn}>All categories</Link>
          : null}
      </div>

      {short || hideFilter ? null : <ProductsFilter showSale={showSale}></ProductsFilter>}

      {isLoading ?
        <Preloader></Preloader> :
        isSuccess && productsData?.length ?
          <div className="items-container">
            {productList.length ? productList.map((product, index) => <ProductItem
              key={index} {...product}/>) : <p className="text-center wide">No Matches</p>}
          </div> : isError ?
            <div className="error-alert">
              {error}
            </div> :
            <p className="text-center wide">No Data</p>
      }
    </div>
  );
}
