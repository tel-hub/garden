import React from "react";
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../features/api/apiSlice";
import Preloader from "../../components/Preloader";
import s from "./index.module.scss";
import PriceBlock from "../../components/PriceBlock";
import ProductImageLoader from "../../components/ProductImageLoader";

export default function ProductInfoPage() {
  const {product_id} = useParams();

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery(product_id);

  const productInfo = data?.[0] ?? null;

  return (
    <div className="container">
      {isLoading ?
        <Preloader></Preloader> :
        isSuccess && data.length ?
          <>
            <div className="container-title__holder">
              <h1 className="container-title">{productInfo?.title ?? ""}</h1>
            </div>

            <div className={s.product_block}>
              <div className={s.product_images}>
                <ProductImageLoader
                  image={productInfo.image}
                  name={productInfo?.title ?? ""}
                />
              </div>

              <div className={s.product_info}>
                <PriceBlock className={s.product_price} price={productInfo?.price}
                            discount_price={productInfo?.discont_price}></PriceBlock>

                <div className={s.product_cart}>
                  <span className={s.cart_btn}>To cart</span>
                </div>

                <p><b>Description</b></p>
                <p>{productInfo?.description ?? ""}</p>
              </div>
            </div>
          </>
          : isError ?
            <div className="error-alert">
              {error}
            </div> :
            <p className="text-center">No Data</p>
      }
    </div>
  );
}
