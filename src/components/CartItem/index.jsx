import React, {useCallback, useEffect, useState} from "react";
import {DialogModal, useModal} from "react-dialog-confirm";
import {useDispatch} from "react-redux";
import {ReactComponent as CrossIcon} from "../../icons/icons8-multiply.svg";
import {ReactComponent as PlusIcon} from "../../icons/plus.svg";
import {ReactComponent as MinusIcon} from "../../icons/minus.svg";

import s from "./index.module.scss";
import PriceBlock from "../PriceBlock";
import ProductImageLoader from "../ProductImageLoader";
import {cartAddItem, cartRemoveItem} from "../../slices/cartSlice";
import {Link} from "react-router-dom";

export default function CartItem(props) {
  const {id, title, price, discont_price, image, count, categoryId} = props;
  const dispatch = useDispatch();
  const {openModal, closeModal} = useModal();
  const [itemCount, setItemCount] = useState(count);

  const changeItemCount = useCallback((count) => {
    if (count === 0) {
      confirmItemRemoval();
    } else {
      dispatch(cartAddItem({...props, count: count}));
    }
    setItemCount(Math.max(1, count));
  }, [itemCount, count]);

  const confirmItemRemoval = () => {
    openModal(
      <DialogModal
        icon="warning"
        hasCancel
        title={<span>Remove item <br/>&laquo;{title}&raquo;?</span>}
        description={"Confirm or cancel"}
        onConfirm={() => {
          dispatch(cartRemoveItem(id));
          closeModal();
        }}
        onCancel={() => {
          changeItemCount(1);
          closeModal();
        }}
      />);
  };

  return (
    <div className={s.cart_item}>
      <div className={s.cart_item_image}>
        <ProductImageLoader
          image={image}
          name={title}
          wrapperClassName={"item-image"}
        />
      </div>

      <div className={s.cart_item_title}>
        <Link to={`/category/${categoryId}/product/${id}`}>
          {title}
        </Link>
      </div>

      <div className={s.cart_item_price}>
        <PriceBlock price={price} discount_price={discont_price} showDiscount={false}></PriceBlock>
      </div>

      <div className={s.cart_item_controls}>
        <span className={s.cart_item_minus} onClick={() => {
          changeItemCount(count - 1);
        }}>
          <MinusIcon/>
        </span>

        <input value={String(itemCount)} min={0} type="number" onChange={e => {
          changeItemCount(+e.target.value);
        }}/>

        <span className={s.cart_item_plus} onClick={() => {
          changeItemCount(count + 1);
        }}>
          <PlusIcon/>
        </span>
      </div>

      <span className={s.cart_item_remove} onClick={() => {
        confirmItemRemoval();
      }}><CrossIcon></CrossIcon></span>
    </div>
  );
}
