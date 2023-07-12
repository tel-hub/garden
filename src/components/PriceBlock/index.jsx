import React from "react";
import cn from "classnames";
import s from "./index.module.scss";

export default function PriceBlock({price = 0, discount_price = 0, className = ""}) {

  return (
    <div className={cn(s.price_block, className)}>
      {discount_price ?
        <React.Fragment>
          <span className={s.price}><b>{discount_price}</b>$</span>
          <span className={s.discount_price}>{price}$</span>
          <span className={s.share}>-{Math.floor(((price / discount_price) - 1) * 100)}%</span>
        </React.Fragment>
        : <span className={s.price}><b>{price}</b>$</span>}
    </div>
  );
}
