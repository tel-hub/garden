import React, {useEffect, useMemo, useState} from "react";
import ConfirmBox from "react-dialog-confirm";
import {useSelector} from "react-redux";
import s from "./index.module.scss";
import CartItem from "../CartItem";

export default function CartContainer({short = false}) {
  const productsList = useSelector((state) => state.cart.products);

  console.log("productsList", productsList);

  const cartTotal = useMemo(() => {
    return productsList.reduce((acc, item) => {
      const itemPrice = item.discont_price || item.price;
      return acc + item.count * itemPrice;
    }, 0);
  }, [productsList]);

  return (
    <div className={s.cart_block}>
      <ul className={s.cart_list}>
        {productsList.length ?
          productsList.map((p, pi) => <li key={pi}><CartItem {...p}></CartItem></li>) :
          <li className="text-center">No Products</li>
        }
      </ul>
      <div className={s.cart_form}>
        <div className={s.cart_form_title}>
          Order details
        </div>

        <form className={s.cart_form_total}>
          <span>Total</span>
          <b>{cartTotal.toFixed(2)}<span className={s.cart_form_currency}>$</span></b>
        </form>

        <div className={s.cart_form_input}>
          <input placeholder="Phone number" type="text"/>
        </div>

        <button type="submit" disabled={!productsList.length} className={s.cart_form_btn}>Order</button>
      </div>
    </div>
  );
}
