import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {makeRetinaSrc} from "../../helpers/functions";
import {BASE_URL} from "../../helpers/constants";
import PriceBlock from "../PriceBlock";

export default function ProductItem(props) {
  const {id, image, title, price, discont_price, categoryId} = props;

  return (
    <div className="grid-item">
      <div className="item-image__holder">
        <LazyLoadImage
          alt={title}
          threshold={300}
          effect={"opacity"}
          wrapperClassName={"item-image __product"}
          //placeholder={<Preloader></Preloader>}
          {...makeRetinaSrc(BASE_URL + image)}
        />
        <div className="item-image__price">

        </div>
      </div>

      <PriceBlock price={price} discount_price={discont_price}></PriceBlock>

      <div className="product-title__holder">
        <Link to={`/products/${categoryId}/product/${id}`} className="product-title">
          {title}
        </Link>
      </div>
    </div>
  );
}
