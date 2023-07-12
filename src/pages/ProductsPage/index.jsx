import "./index.module.scss";
import React, {useEffect, useState} from "react";
import ProductsContainer from "../../components/ProductsContainer";

export default function ProductsPage() {

  return (
    <div className="container">
      <ProductsContainer></ProductsContainer>
    </div>
  );
}
