import "./index.module.scss";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getProducts} from "../../requests/categories_req";
import ProductItem from "../../components/ProductItem";

export default function ProductByCategoryPage() {
  const {id} = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts(id).then(json => {
      console.log("productList", id, json);

      setProductList(json);
    });
  }, [id]);

  return (
    <div>
      <p>Product {productList.length ? productList[0].title : id}</p>

      {/*<div className="products-container">*/}
      {/*  {productList?.map((prod, index) => {*/}
      {/*    return <ProductItem key={index} {...prod}/>*/}
      {/*  })}*/}
      {/*</div>*/}
    </div>
  );
}
