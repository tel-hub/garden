import React from "react";
import s from "./index.module.scss";

export default function PriceBlock({price = 0, discount_price = 0}) {

  return (
    <div className={s.price_block}>
      {discount_price ?
        <React.Fragment>
          <span className={s.price}>{discount_price}$</span>
          <span className={s.discount_price}>{price}$</span>
          <span className={s.share}>-{Math.floor(((price / discount_price) - 1) * 100)}%</span>
        </React.Fragment>
        : <span className={s.price}>{price}$</span>}
    </div>
  );
}
