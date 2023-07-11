import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function ProductItem(props) {
  const {id, images, title, price, category} = props;

  return (
    <Link to={`/products/${category.id}/product/${id}`} className="product">
      {/*<div className="product-title">*/}
      {/*  {title}*/}
      {/*</div>*/}
      {/*<div className="product-image">*/}
      {/*  {images?.length ? <img src={images[0]} alt=""/> : 'no image'}*/}
      {/*</div>*/}
      {/*<p>*/}
      {/*  Price:&nbsp;<b>{price}</b>&nbsp;USD*/}
      {/*</p>*/}
    </Link>
  );
}
