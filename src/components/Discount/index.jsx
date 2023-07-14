import React from "react";
import cn from "classnames";
import s from "./index.module.scss";
import share from "../../images/share.png";
import share2x from "../../images/share@2x.png";
import share3x from "../../images/share@3x.png";

export default function Discount(props) {

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

            <form action="#" className={cn(s.discount_form)}>
              <div className={cn(s.discount_input)}>
                <input placeholder="+49" type="text"/>
              </div>
              <button className={s.discount_btn}>Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
