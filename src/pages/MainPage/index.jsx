import React, {useEffect, useState} from "react";
import {getCategories} from "../../requests/categories_req";
import "./index.scss";
import {Link} from "react-router-dom";
import {BASE_URL} from "../../helpers/constants";
import {makeRetinaSrc} from "../../helpers/functions";
import Hero from "../../components/Hero";
import Discount from "../../components/Discount";
import CategoryContainer from "../../components/CategoryContainer";

export default function MainPage() {
  useEffect(() => {

  }, []);

  return (
    <>
      <Hero></Hero>
      <CategoryContainer short={true}></CategoryContainer>
      <Discount></Discount>


    </>
  );
}
