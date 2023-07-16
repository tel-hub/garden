import React, {useEffect, useRef, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import {ROUTES} from "./features/helpers/constants";
import {pageScrolledToggle} from "./slices/interfaceSlice";
import {useDispatch, useSelector} from "react-redux";
import {usePrevious, useScroll} from "./features/helpers/hooks";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import ProductByCategoryPage from "./pages/ProductByCategoryPage";
import CategoriesPage from "./pages/CategoriesPage";
import CartPage from "./pages/CartPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import SalesPage from "./pages/SalesPage";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const scrollPosition = useScroll();
  const location = useLocation();
  const prevLocation = usePrevious(location);
  const contentRef = useRef(null);
  const pageScrolled = useSelector((state) => state.interface.pageScrolled);
  const [contentMinHeight, setContentMinHeight] = useState("");

  useEffect(() => {
    let newScrollTop = scrollPosition > 100;

    if (pageScrolled !== newScrollTop) {
      dispatch(pageScrolledToggle(newScrollTop));
    }
  }, [scrollPosition, pageScrolled, dispatch]);

  return (
    <React.Fragment>
      <Header prevLocation={prevLocation}/>

      <main className="content" ref={contentRef} style={{minHeight: contentMinHeight}}>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key}
                         classNames="page-transition"
                         onExited={() => {
                           setContentMinHeight("");
                         }}
                         onEnter={() => {
                           window.scrollTo(0, 0);
                           setContentMinHeight(contentRef?.current?.getBoundingClientRect().height + "px");
                         }}
                         timeout={{enter: 200, exit: 600}}>
            <Routes location={location}>
              <Route path={ROUTES.home.path} element={(<MainPage/>)}/>
              <Route path={ROUTES.sale.path} element={(<SalesPage/>)}/>
              <Route path={ROUTES.catalog.path} element={(<CategoriesPage/>)}/>
              <Route path={ROUTES.categoryId.path} element={(<ProductByCategoryPage/>)}/>
              <Route path={ROUTES.products.path} element={(<ProductsPage/>)}/>
              <Route path={ROUTES.productsId.path} element={(<ProductInfoPage/>)}/>
              <Route path={ROUTES.cart.path} element={(<CartPage/>)}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
