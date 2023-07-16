import React from "react";
import cn from "classnames";
import {priceFormatter} from "../../features/helpers/functions";
import s from "./index.module.scss";

export default function PriceBlock({price = 0, discount_price = 0, className = "", showDiscount = true}) {

  return (
    <div className={cn(s.price_block, className)}>
      {discount_price ?
        <React.Fragment>
          <span className={s.price}><b>{priceFormatter(discount_price)}</b>$</span>
          <span className={s.discount_price}>{priceFormatter(price)}$</span>
          {showDiscount ? <span className={s.share}>-{Math.floor(((price / discount_price) - 1) * 100)}%</span> : null}
        </React.Fragment>
        : <span className={s.price}><b>{priceFormatter(price)}</b>$</span>}
    </div>
  );
}
