import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Category from "../Category";
import {useGetCategoriesQuery} from "../../features/api/apiSlice";
import {ROUTES} from "../../features/helpers/constants";
import Preloader from "../Preloader";
import s from "./index.module.scss";

export default function CategoryContainer({short = false, title = ""}) {

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCategoriesQuery("all");

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">{title}</h1>

        {short ?
          <Link to={ROUTES.catalog.path} className={s.category_btn}>All categories</Link>
          : null}
      </div>

      {isLoading ?
        <Preloader></Preloader> :
        isSuccess && categories.length ?
          <div className="items-container">
            {categories.slice(0, short ? 4 : categories.length).map((cat, index) => {
              return <Category key={index} id={cat.id} name={cat.title} image={cat.image}/>;
            })}
          </div> : isError ?
            <div className="error-alert">
              {error}
            </div> :
            <p className="text-center">No Data</p>
      }
    </div>
  );
}
