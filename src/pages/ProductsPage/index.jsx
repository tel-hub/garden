import "./index.module.scss";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getCategories, getProducts} from "../../requests/categories_req";
import {makeRetinaSrc} from "../../helpers/functions";
import {BASE_URL} from "../../helpers/constants";
import ProductsContainer from "../../components/ProductsContainer";

export default function ProductsPage() {
  //const [products, setProducts] = useState([]);
  //
  //useEffect(() => {
  //
  //  getProducts().then(data => {
  //    console.log("products", data);
  //    setProducts(data);
  //  });
  //}, []);

  return (
    <div className="container">

      <ProductsContainer></ProductsContainer>

      {/*{products.length ? products.map((m, mi) => {*/}
      {/*  return <div className="category-item" key={mi}><Link to={`/products/${m.id}`}>*/}
      {/*    <div className="category-image">*/}
      {/*      <img {...makeRetinaSrc(BASE_URL + m.image)} alt=""/>*/}
      {/*    </div>*/}

      {/*    <div className="category-name">{m.title}</div>*/}
      {/*  </Link></div>;*/}
      {/*}) : null}*/}
    </div>
  );
}
