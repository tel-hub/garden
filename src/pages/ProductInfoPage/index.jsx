import React from "react";
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../features/api/apiSlice";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {makeRetinaSrc} from "../../helpers/functions";
import {BASE_URL} from "../../helpers/constants";
import Preloader from "../../components/Preloader";
import s from "./index.module.scss";
import PriceBlock from "../../components/PriceBlock";

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

  console.log("productInfo", productInfo);

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
                <LazyLoadImage
                  alt={productInfo.title}
                  threshold={300}
                  effect={"opacity"}
                  //placeholder={<Preloader></Preloader>}
                  {...makeRetinaSrc(BASE_URL + productInfo.image)}
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
