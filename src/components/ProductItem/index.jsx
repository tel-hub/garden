import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import PriceBlock from "../PriceBlock";
import s from "./index.module.scss";
import {useDispatch} from "react-redux";
import {cartAddItem} from "../../slices/cartSlice";
import ProductImageLoader from "../ProductImageLoader";

export default function ProductItem(props) {
  const {id, image, title, price, discont_price, categoryId} = props;
  const dispatch = useDispatch();

  return (
    <div className="grid-item">
      <div className="item-image__holder">
        <ProductImageLoader
          image={image}
          name={title}
          wrapperClassName={"item-image __product"}
        />
        <div className="item-image__price">
          <span onClick={() => {
            dispatch(cartAddItem({...props, count: 1}));
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
