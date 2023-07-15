import React, {useEffect, useState} from "react";
import {useGetProductsQuery} from "../../features/api/apiSlice";
import Preloader from "../Preloader";
import ProductItem from "../ProductItem";
import ConfirmBox from "react-dialog-confirm";
import {useSelector} from "react-redux";
import s from "./index.module.scss";

export default function CartContainer({short = false}) {
  const cartList = useSelector((state) => state.cart);


  //const {
  //  data: products,
  //  isLoading,
  //  isSuccess,
  //  isError,
  //  error, ...rest
  //} = useGetProductsQuery("all");

  return (
    <div className={s.cart_block}>
      <div className={s.cart_list}>

      </div>
      <div className={s.cart_form}>
        <div className={s.cart_form_title}>
          Order details
        </div>

        <form className={s.cart_form_total}>
          <span>Total</span>
          <b>123<span className={s.cart_form_currency}>$</span></b>
        </form>

        <div className={s.cart_form_input}>
          <input placeholder="Phone number" type="text"/>
        </div>

        <button type="submit" className={s.cart_form_btn}>Order</button>
      </div>
    </div>
  );
}
