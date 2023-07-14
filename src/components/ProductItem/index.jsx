import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {makeRetinaSrc} from "../../features/helpers/functions";
import {BASE_URL} from "../../features/helpers/constants";
import PriceBlock from "../PriceBlock";
import s from "./index.module.scss";

export default function ProductItem(props) {
  const {id, image, title, price, discont_price, categoryId} = props;
  const [hasError, setHasError] = useState(false);

  const imageError = useCallback((e) => {
    if (!hasError) {
      setHasError(true);
      e.target.parentElement.innerHTML = `<img alt="${e.target.alt}" src="${e.target.src}" loading="lazy">`;
    }
  }, [hasError]);

  return (
    <div className="grid-item">
      <div className="item-image__holder">
        <LazyLoadImage
          alt={title}
          threshold={300}
          effect={"opacity"}
          wrapperClassName={"item-image __product"}
          src={BASE_URL + image}
          //placeholder={<Preloader></Preloader>}
          {...makeRetinaSrc(BASE_URL + image)}
          onError={imageError}
        />
        <div className="item-image__price">
          <span onClick={() => {

          }} className={s.cart_btn}>Add to cart</span>
        </div>
      </div>

      <PriceBlock price={price} discount_price={discont_price}></PriceBlock>

      <div className="product-title__holder">
        <Link to={`/category/${categoryId}/product/${id}`} className="product-title">
          {title}
        </Link>
      </div>
    </div>
  );
}
