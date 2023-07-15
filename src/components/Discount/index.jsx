import React from "react";
import cn from "classnames";
import s from "./index.module.scss";
import share from "../../images/share.png";
import share2x from "../../images/share@2x.png";
import share3x from "../../images/share@3x.png";
import {useForm} from "react-hook-form";
import {usePostSaleMutation} from "../../features/api/apiSlice";
import {DialogModal, useModal} from "react-dialog-confirm";

export default function Discount(props) {
  const {register, handleSubmit, reset, formState: {errors}} = useForm();
  const {openModal} = useModal();

  const [postSale] = usePostSaleMutation();

  const orderConfirmation = (text, icon) => {
    openModal(
      <DialogModal
        icon={icon}
        title={text.toUpperCase()}
      />);
  };

  const onSubmit = (data) => {
    postSale(data)
      .then(result => {
        reset();
        if (result.data.status === "OK") {
          orderConfirmation(result.data.message, "success");
        } else {
          orderConfirmation(result.data.message, "error");
        }
      });
  };

  return (
    <div className={cn(s.discount_wrapper)}>
      <div className="container">
        <div className={cn(s.discount_block)}>
          <div className={cn(s.discount_image)}>
            <img src={share} srcSet={`${share}, ${share2x} 2x, ${share3x} 3x`} alt="logo"/>
          </div>
          <div className={cn(s.discount_text)}>
            <h2>5%&nbsp;off</h2>
            <h3>on the first order</h3>

            <form className={cn(s.discount_form)} onSubmit={handleSubmit(onSubmit)}>
              <div className={cn(s.discount_input, errors.hasOwnProperty("userPhone") ? "input-error" : "")}>
                <input {...register("userPhone", {
                  required: true
                })} placeholder="+49" type="text"/>
              </div>
              <button className={s.discount_btn}>Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
