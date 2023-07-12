import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {makeRetinaSrc} from "../../helpers/functions";
import {BASE_URL} from "../../helpers/constants";

export default function ProductItem(props) {
  const {id, image, title, price, categoryId} = props;

  return (
    <div className="category-item">
      <div className="category-image__holder">
        <LazyLoadImage
          alt={title}
          threshold={300}
          effect={"opacity"}
          wrapperClassName={"category-image"}
          //placeholder={<Preloader></Preloader>}
          {...makeRetinaSrc(BASE_URL + image)}
        />
        <div className="category-image__price">

        </div>
      </div>
      <div className="product-price">
        <b>{price}$</b>
      </div>
      <div className="product-title__holder">
        <Link to={`/products/${categoryId}/product/${id}`} className="product-title">
          {title}
        </Link>
      </div>
    </div>
  );
}
