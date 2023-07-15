import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../CartItem";
import {usePostOrderMutation} from "../../features/api/apiSlice";
import {useForm} from "react-hook-form";
import s from "./index.module.scss";
import {DialogModal, useModal} from "react-dialog-confirm";
import {cartClear} from "../../slices/cartSlice";
import cn from "classnames";
import {PHONE_ERROR_TEXT, PHONE_REGEX} from "../../features/helpers/constants";

export default function CartContainer() {
  const productsList = useSelector((state) => state.cart.products);
  const [postOrder] = usePostOrderMutation();
  const {register, handleSubmit, reset, formState: {errors}} = useForm();
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
    postOrder({...data, items: productsList.map(m => ({id: m.id, count: m.count}))})
      .then(result => {
        reset();

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

        <div className={cn(s.cart_form_input, errors.hasOwnProperty("userPhone") ? "input-error" : "")}>
          <input {...register("userPhone", {
            required: true,
            pattern: {
              value: PHONE_REGEX,
              message: PHONE_ERROR_TEXT
            }
          })} placeholder="Phone number" type="text"/>
          {errors.hasOwnProperty("userPhone") ?
            <span className="error-alert input-error-alert">{errors.userPhone.message}</span> : null}
        </div>

        <button type="submit" disabled={!productsList.length} className={s.cart_form_btn}>Order</button>
      </form>
    </div>
  );
}
