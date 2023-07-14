import React, {useEffect, useState} from "react";
import "./index.scss";
import Hero from "../../components/Hero";
import Discount from "../../components/Discount";
import CategoryContainer from "../../components/CategoryContainer";
import SalesContainer from "../../components/SalesContainer";

export default function MainPage() {
  useEffect(() => {

  }, []);

  return (
    <>
      <Hero></Hero>
      <CategoryContainer short={true}></CategoryContainer>
      <Discount></Discount>
      <SalesContainer short={true}></SalesContainer>
    </>
  );
}
