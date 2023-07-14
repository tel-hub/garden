import React from "react";
import cn from "classnames";
import s from "./index.module.scss";

export default function Checkbox(props) {
  const {onChange, checked} = props;

  return (
    <label className={cn(s.checkbox_wrapper)}>
      <input defaultChecked={checked} className={cn(s.checkbox_input)} type="checkbox" onChange={(e) => {
        onChange(e.target.checked);
      }}/>
      <span className={cn(s.checkbox_text)}></span>
    </label>
  );
}
