import React, {useEffect, useMemo} from "react";
import {Link, NavLink} from "react-router-dom";
import {ROUTES} from "../../features/helpers/constants";
import cn from "classnames";
import s from "./index.module.scss";
import {ReactComponent as CartIcon} from "../../icons/icons8-shopping_bag.svg";
import logo from "../../images/logo.png";
import logo2x from "../../images/logo@2x.png";
import logo3x from "../../images/logo@3x.png";
import {useDispatch, useSelector} from "react-redux";
import {menuToggle, menuUpdate} from "../../slices/interfaceSlice";
import {useLocation} from "react-router-dom";

export default function Header(props) {
  const productsList = useSelector((state) => state.cart.products);
  const burgerOpen = useSelector((state) => state.interface.burgerOpen);
  const pageScrolled = useSelector((state) => state.interface.pageScrolled);
  const dispatch = useDispatch();
  const location = useLocation();
  const prevLocation = props.prevLocation;

  useEffect(() => {
    if (prevLocation && location && prevLocation.pathname !== location.pathname) {
      dispatch(menuUpdate(false));
    }
  }, [prevLocation, location]);

  useEffect(() => {
    document.documentElement.classList[burgerOpen ? "add" : "remove"]("__open-mob-menu");
  }, [burgerOpen]);

  const navList = useMemo(() => {
    return [
      {
        to: ROUTES.home.path,
        text: "Main Page",
        active: location.pathname === ROUTES.home.path
      },
      {
        to: ROUTES.products.path,
        text: "All products",
        active: location.pathname === ROUTES.products.path
      },
      {
        to: ROUTES.sale.path,
        text: "All sales",
        active: location.pathname === ROUTES.sale.path
      }
    ];
  }, [location]);

  return (
    <header className={cn(s.header_wrapper, (pageScrolled || burgerOpen) ? s.header_short : "")}>
      <div className="container">
        <div className={cn(s.header)}>
          <Link to={ROUTES.home.path} className={s.logo}>
            <img src={logo} srcSet={`${logo2x} 2x, ${logo3x} 3x`} alt="logo"/>
          </Link>

          <Link to={ROUTES.catalog.path} className={cn(s.catalog)}>
            Catalog
          </Link>

          <div className={s.burger_block}>
        <span className={cn(s.burger, (burgerOpen ? s.burger_open : ""))} onClick={() => {
          dispatch(menuToggle());
        }}>
          <span><span></span><span></span><span></span></span>
        </span>
          </div>

          <div className={cn(s.mega_menu, (burgerOpen ? s.mega_menu_open : ""))}>
            <ul className={s.nav}>
              {navList.map((link, index) => <li key={index}>
                <NavLink to={link.to}>{link.text}</NavLink>
              </li>)}
            </ul>
          </div>

          <div className={s.cart_block}>
            <Link to={ROUTES.cart.path} className={s.cart}>
              <CartIcon></CartIcon>
              {productsList.length ? <span className={s.cart_counter}>{productsList.length}</span> : null}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
