import React, {useEffect, useState} from "react";
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
                                            onlySales = true,
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
    setProductList(hideFilter ? productsData :
      applyProductFilter(productsData, onlySales ? {...filterState, onlySales: true} : filterState));
  }, [productsData, filterState, onlySales]);

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">{title}</h1>

        {short ?
          <Link to={ROUTES.catalog.path} className={s.category_btn}>All categories</Link>
          : null}
      </div>

      {short || hideFilter ? null : <ProductsFilter showSale={!onlySales}></ProductsFilter>}

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
