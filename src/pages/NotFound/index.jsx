import React from "react";
import s from "./index.module.scss";
import notFound from "../../images/404.png";
import notFound2x from "../../images/404@2x.png";
import notFound3x from "../../images/404@3x.png";

export default function NotFound() {

  return (
    <div className={s.not_found}>
      <img src={notFound} srcSet={`${notFound2x} 2x, ${notFound3x} 3x`} alt="404"/>
    </div>
  );
}
