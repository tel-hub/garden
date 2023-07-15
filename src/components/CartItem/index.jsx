import React from "react";
import {DialogModal, useModal} from "react-dialog-confirm";
import {useDispatch} from "react-redux";
import {ReactComponent as CrossIcon} from "../../icons/icons8-multiply.svg";
import s from "./index.module.scss";
import PriceBlock from "../PriceBlock";
import ProductImageLoader from "../ProductImageLoader";
import {cartRemoveItem} from "../../slices/cartSlice";
import {Link} from "react-router-dom";

export default function CartItem(props) {
  const {id, title, price, discont_price, description, image, count, categoryId} = props;
  const dispatch = useDispatch();
  const {openModal, closeModal} = useModal();

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
        <input placeholder="Phone number" type="text"/>
      </div>

      <span className={s.cart_item_remove} onClick={() => {
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
          />);
      }}><CrossIcon></CrossIcon></span>
    </div>
  );
}
