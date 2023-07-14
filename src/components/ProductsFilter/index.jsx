import React, {useEffect, useState} from "react";
import s from "./index.module.scss";
import Checkbox from "../Checkbox";
import {filterOptions} from "../../slices/filterSlice";

export default function ProductsFilter(props) {
  const {} = props;

  return (
    <div className={s.products_filter}>
      <div className={s.filter_cell}>
        <b>Price</b>

        <input className={s.filter_input} type="number" min={0}/>

        <input className={s.filter_input} type="number" min={0}/>
      </div>

      <div className={s.filter_cell}>
        <b>Discounted items</b>

        <Checkbox></Checkbox>
      </div>
      <div className={s.filter_cell}>
        <b>Sorted</b>

        <select className={s.filter_select} onSelect={e => {

        }}>
          {filterOptions.map((opt, index) => {
            return <option key={index} value={index}>{opt}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
