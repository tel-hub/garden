import React, {useEffect, useState} from "react";
import s from "./index.module.scss";
import Checkbox from "../Checkbox";
import {filterUpdate, sortOptions} from "../../slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";

export default function ProductsFilter({showSale = true}) {
  const {filter: filterState} = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.products_filter}>
      <div className={s.filter_cell}>
        <b>Price</b>

        <input className={s.filter_input} type="number" defaultValue={filterState.priceMin} min={0}
               onChange={(e) => {
                 const newVal = parseInt(e.target.value || "0");
                 dispatch(filterUpdate({...filterState, priceMin: newVal}));
               }}
        />

        <input className={s.filter_input} type="number" defaultValue={filterState.priceMax} min={0}
               onChange={(e) => {
                 const newVal = parseInt(e.target.value || "0") || Infinity;
                 dispatch(filterUpdate({...filterState, priceMax: newVal}));
               }}
        />
      </div>

      {showSale ?
        <div className={s.filter_cell}>
          <b>Discounted items</b>
          <Checkbox checked={filterState.onlySales}
                    onChange={(checked) => dispatch(filterUpdate({...filterState, onlySales: checked}))}></Checkbox>
        </div> : null}

      <div className={s.filter_cell}>
        <b>Sorted</b>

        <select className={s.filter_select} defaultValue={filterState.sortBy} onChange={e => {
          dispatch(filterUpdate({...filterState, sortBy: e.target.value}));
        }}>
          {sortOptions.map((opt, index) => {
            return <option key={index} value={opt}>{opt}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
