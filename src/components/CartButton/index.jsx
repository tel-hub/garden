import React from "react";
import {useDispatch} from "react-redux";

import {setCartFlyOptions} from "../../slices/interfaceSlice";
import {cartAddItem} from "../../slices/cartSlice";

export default function CartButton(props) {
  const {productInfo, children, className} = props;
  const dispatch = useDispatch();

  return (
    <span className={className} onClick={(e) => {
      const radius = parseFloat(document.defaultView.getComputedStyle(e.target)?.borderRadius ?? "0");
      const bg = document.defaultView.getComputedStyle(e.target)?.backgroundColor ?? "none";
      const {left, top, width, height} = e.target.getBoundingClientRect();
      dispatch(setCartFlyOptions({left, top, width, height, radius, bg}));
      dispatch(cartAddItem({...productInfo, count: -1}));
    }}>{children}</span>
  );
}
