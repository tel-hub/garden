import React from "react";
import cn from "classnames";
import s from "./index.module.scss";

export default function Checkbox(props) {

  return (
    <label className={cn(s.checkbox_wrapper)}>
      <input className={cn(s.checkbox_input)} type="checkbox"/>
      <span className={cn(s.checkbox_text)}></span>
    </label>
  );
}
