import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {resetCartFlyOptions, setCartFlyOptions} from "../../slices/interfaceSlice";
import {cartAddItem} from "../../slices/cartSlice";

export default function CartButton(props) {
  const {cartFlyOptions} = useSelector((state) => state.interface);

  const {productInfo, children, className} = props;
  const dispatch = useDispatch();

  return (
    <span className={className} onClick={(e) => {
      if (cartFlyOptions.top + cartFlyOptions.left !== 0) {
        dispatch(resetCartFlyOptions());
      }

      const radius = parseFloat(document.defaultView.getComputedStyle(e.target)?.borderRadius ?? "0");
      const bg = document.defaultView.getComputedStyle(e.target)?.backgroundColor ?? "none";
      const {left, top, width, height} = e.target.getBoundingClientRect();
      dispatch(setCartFlyOptions({left, top, width, height, radius, bg}));

      dispatch(cartAddItem({...productInfo, count: -1}));
    }}>{children}</span>
  );
}
