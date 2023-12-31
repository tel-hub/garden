import React from "react";
import {Link} from "react-router-dom";
import PriceBlock from "../PriceBlock";
import ProductImageLoader from "../ProductImageLoader";
import CartButton from "../CartButton";
import s from "./index.module.scss";

export default function ProductItem(props) {
  const {id, image, title, price, discont_price, categoryId} = props;

  return (
    <div className="grid-item">
      <div className="item-image__holder">
        <Link to={`/product/${id}`} className={"item-image __product"}>
          <ProductImageLoader
            image={image}
            name={title}
          />
        </Link>
        <div className="item-image__price">
          <CartButton productInfo={props} className={s.cart_btn}>Add to cart</CartButton>
        </div>
      </div>

      <PriceBlock price={price} discount_price={discont_price}></PriceBlock>

      <div className="product-title__holder">
        <Link to={`/product/${id}`} className="product-title">
          {title}
        </Link>
      </div>
    </div>
  );
}
