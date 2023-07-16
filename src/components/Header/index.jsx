import React, {useEffect, useMemo, useState, useRef} from "react";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../features/helpers/constants";
import cn from "classnames";
import s from "./index.module.scss";
import {ReactComponent as CartIcon} from "../../icons/icons8-shopping_bag.svg";
import logo from "../../images/logo.png";
import logo2x from "../../images/logo@2x.png";
import logo3x from "../../images/logo@3x.png";
import {useDispatch, useSelector} from "react-redux";
import {menuToggle, menuUpdate, setCartFlyOptions} from "../../slices/interfaceSlice";
import {useLocation} from "react-router-dom";

export default function Header(props) {
  const productsList = useSelector((state) => state.cart.products);
  const {burgerOpen, cartFlyOptions} = useSelector((state) => state.interface);
  const pageScrolled = useSelector((state) => state.interface.pageScrolled);
  const dispatch = useDispatch();
  const location = useLocation();
  const [cartFlyActive, setCartFlyActive] = useState(false);
  const [cartCounter, setCartCounter] = useState(productsList.length);
  const htmlRoot = document.documentElement;
  const cartFlyRef = useRef(null);

  const prevLocation = props.prevLocation;

  useEffect(() => {
    if (prevLocation && location && prevLocation.pathname !== location.pathname) {
      dispatch(menuUpdate(false));
    }
  }, [prevLocation, location, dispatch]);

  useEffect(() => {
    document.documentElement.classList[burgerOpen ? "add" : "remove"]("__open-mob-menu");
  }, [burgerOpen]);

  useEffect(() => {
    if (cartFlyRef?.current && cartFlyOptions && (cartFlyOptions.top + cartFlyOptions.left) !== 0) {
      const parentRect = cartFlyRef?.current.parentElement.getBoundingClientRect();

      htmlRoot.style.setProperty("--cart-fly-width", `${cartFlyOptions.width}px`);
      htmlRoot.style.setProperty("--cart-fly-height", `${cartFlyOptions.height}px`);
      htmlRoot.style.setProperty("--cart-fly-radius", `${cartFlyOptions.radius}px`);
      htmlRoot.style.setProperty("--cart-fly-bg", cartFlyOptions.bg);
      htmlRoot.style.setProperty("--cart-fly-x", `${cartFlyOptions.left - parentRect.x + cartFlyOptions.width - parentRect.width}px`);
      htmlRoot.style.setProperty("--cart-fly-y", `${cartFlyOptions.top - parentRect.y + parentRect.height}px`);
      setCartFlyActive(true);
    } else {
      htmlRoot.style.setProperty("--cart-fly-width", "0px");
      htmlRoot.style.setProperty("--cart-fly-height", "0px");
      htmlRoot.style.setProperty("--cart-fly-radius", "0px");
      htmlRoot.style.setProperty("--cart-fly-bg", "#393");
      htmlRoot.style.setProperty("--cart-fly-x", "0px");
      htmlRoot.style.setProperty("--cart-fly-y", "0px");
      setCartFlyActive(false);
    }
  }, [cartFlyOptions, cartFlyActive, cartFlyRef]);

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
          <NavLink to={ROUTES.home.path} className={s.logo}>
            <img src={logo} srcSet={`${logo2x} 2x, ${logo3x} 3x`} alt="logo"/>
          </NavLink>

          <NavLink to={ROUTES.catalog.path} className={cn(s.catalog)}>
            Catalog
          </NavLink>

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
            <NavLink to={ROUTES.cart.path} className={s.cart}>
              <CartIcon></CartIcon>
              <span ref={cartFlyRef} className={cn(s.cart_fly, cartFlyActive ? s.cart_fly_active : "")}
                    onTransitionEnd={(e) => {
                      setCartCounter(productsList.length);
                      dispatch(setCartFlyOptions({
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        radius: 0,
                        bg: "#393"
                      }));
                    }}/>
              {cartCounter ? <span className={s.cart_counter}>{cartCounter}</span> : null}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
