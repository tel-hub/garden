import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../helpers/constants";
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
            <img src={share} srcSet={`${share2x} 2x, ${share3x} 3x`} alt="logo"/>
          </div>
          <div className={cn(s.discount_text)}>
            <h2>Sale</h2>
            <h3>New season</h3>

            <form action="#">
              <input placeholder="+49" type="text"/>
              <button className={s.discount_btn}>Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
