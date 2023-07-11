import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getProductInfo} from "../../requests/categories_req";
import "./index.module.scss";

export default function ProductInfoPage() {
  const {product_id} = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    getProductInfo(product_id).then(json => setProductInfo(json));
  }, [product_id]);

  return (
    <div>
      <p>Product {product_id || ""}</p>

      {productInfo === {} ? null : <>
        {/*<h4>{productInfo?.title ?? ''}</h4>*/}
        {/*<p>{productInfo?.description ?? ''}</p>*/}
        {/*<div className="product-image-gallery">*/}
        {/*{*/}
        {/*  productInfo?.images?.map((image, index) => {*/}
        {/*    return <div className="product-image-thumb" key={index}><img src={image} alt="image"/></div>*/}
        {/*  })*/}
        {/*}*/}
        {/*</div>*/}
      </>}
    </div>
  );
}
