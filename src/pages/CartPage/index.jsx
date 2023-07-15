import React from "react";
import CartContainer from "../../components/CartContainer";
import {ReactComponent as ForwardIcon} from "../../icons/icons8-forward.svg";
import {ROUTES} from "../../features/helpers/constants";
import {Link} from "react-router-dom";
import s from "./index.module.scss";

export default function CartPage() {

  return (
    <div className="container">
      <div className="container-title__holder">
        <h1 className="container-title">Shopping cart</h1>
      </div>

      <p className="text-center">
        <Link className={s.back_link} to={ROUTES.catalog.path}><span>Back to the store</span><ForwardIcon></ForwardIcon></Link>
      </p>

      <CartContainer></CartContainer>
    </div>
  );
}
