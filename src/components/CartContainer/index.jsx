import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../CartItem";
import {usePostOrderMutation} from "../../features/api/apiSlice";
import {useForm} from "react-hook-form";
import s from "./index.module.scss";
import {DialogModal, useModal} from "react-dialog-confirm";
import {cartClear} from "../../slices/cartSlice";

export default function CartContainer({short = false}) {
  const productsList = useSelector((state) => state.cart.products);
  const [postOrder] = usePostOrderMutation();
  const {register, handleSubmit} = useForm();
  const {openModal} = useModal();
  const dispatch = useDispatch();

  const orderConfirmation = (text, icon) => {
    openModal(
      <DialogModal
        icon={icon}
        title={text.toUpperCase()}
      />);
  };

  const onSubmit = (data) => {
    postOrder({...data, productsList})
      .then(result => {
        if (result.data.status === "OK") {
          dispatch(cartClear());
          orderConfirmation(result.data.message, "success");
        } else {
          orderConfirmation(result.data.message, "error");
        }
      });
  };

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
      <form className={s.cart_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.cart_form_title}>
          Order details
        </div>

        <div className={s.cart_form_total}>
          <span>Total</span>
          <b>{cartTotal.toFixed(2)}<span className={s.cart_form_currency}>$</span></b>
        </div>

        <div className={s.cart_form_input}>
          <input {...register("userPhone")} placeholder="Phone number" type="text"/>
        </div>

        <button type="submit" disabled={!productsList.length} className={s.cart_form_btn}>Order</button>
      </form>
    </div>
  );
}
