import React from "react";
import Hero from "../../components/Hero";
import Discount from "../../components/Discount";
import CategoryContainer from "../../components/CategoryContainer";
import SalesContainer from "../../components/SalesContainer";

export default function MainPage() {

  return (
    <div>
      <Hero></Hero>
      <CategoryContainer short={true} title={"Catalog"}></CategoryContainer>
      <Discount></Discount>
      <SalesContainer></SalesContainer>
    </div>
  );
}
