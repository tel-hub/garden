import React, {useEffect, useState} from "react";
import ConfirmBox from "react-dialog-confirm";
import {useSelector} from "react-redux";
import {ReactComponent as CrossIcon} from "../../icons/icons8-multiply.svg";
import s from "./index.module.scss";
import PriceBlock from "../PriceBlock";


//let d = {
//  "id": 19,
//  "title": "Alpine Birdhouse",
//  "price": 135,
//  "discont_price": 128,
//  "description": "Doesn’t every bird deserve a high-end residence? Our stylish Alpine Birdhouse is crafted in premium mango wood with a copper roof and entranceway that will develop a lovely verdigris patina over time. At the end of the season, the back of the birdhouse slides open for easy cleaning. Simply wipe out the house with a damp cloth to give the next nesters a fresh start.",
//  "image": "/product_img/19.jpeg",
//  "createdAt": "2022-10-02T14:43:29.000Z",
//  "updatedAt": "2022-10-02T14:43:29.000Z",
//  "categoryId": 3
//}

export default function CartItem(props) {
  const {id, title, price, discont_price, description, image, count} = props;


  return (
    <div className={s.cart_item}>
      <div className={s.cart_item_image}>
        {image}
      </div>

      <div className={s.cart_item_title}>
        {title}
      </div>

      <div className={s.cart_item_price}>
        <PriceBlock price={price} discount_price={discont_price} showDiscount={false}></PriceBlock>
      </div>

      <div className={s.cart_item_controls}>
        <input placeholder="Phone number" type="text"/>
      </div>

      <span className={s.cart_item_remove}><CrossIcon></CrossIcon></span>

    </div>
  );
}
