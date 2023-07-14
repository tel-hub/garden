import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../helpers/constants";
import cn from "classnames";
import s from "./index.module.scss";
import sale from "../../images/sale.png";
import sale2x from "../../images/sale@2x.png";
import sale3x from "../../images/sale@3x.png";

export default function Hero(props) {

  return (
    <div className={cn(s.hero_wrapper)}>
      <div className="container">
        <div className={cn(s.hero_block)}>
          <div className={cn(s.hero_text)}>
            <h2>Sale</h2>
            <h3>New season</h3>
            <Link to={ROUTES.sale.path} className={s.hero_btn}>Sale</Link>
          </div>
          <div className={cn(s.hero_image)}>
            <picture>
              <source srcSet={`${sale}, ${sale2x} 2x, ${sale3x} 3x`}/>
              <img src={sale} alt="logo"/>
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
