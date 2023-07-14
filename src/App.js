import React, {useEffect, useState} from "react";
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
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const scrollPosition = useScroll();
  const location = useLocation();
  const prevLocation = usePrevious(location);
  const pageScrolled = useSelector((state) => state.interface.pageScrolled);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    let newScrollTop = scrollPosition > 100;

    if (pageScrolled !== newScrollTop) {
      dispatch(pageScrolledToggle(newScrollTop));
    }

  }, [scrollPosition, pageScrolled]);

  useEffect(() => {
    if (JSON.stringify(location) !== JSON.stringify(displayLocation)) {
      setTransitionStage("fadeOut");
    }
  }, [prevLocation, location, displayLocation]);

  return (
    <React.Fragment>
      <Header prevLocation={prevLocation}/>

      <main className="content">
        {/*<div*/}
        {/*  key={location.pathname}*/}
        {/*  className={`${transitionStage}`}*/}
        {/*  onAnimationEnd={() => {*/}
        {/*    if (transitionStage === "fadeOut") {*/}
        {/*      setTransitionStage("fadeIn");*/}
        {/*      setDisplayLocation(location);*/}
        {/*    }*/}
        {/*  }}*/}
        {/*>*/}
        <Routes location={location}>
          <Route path={ROUTES.home.path} element={(<MainPage/>)}/>
          <Route path={ROUTES.catalog.path} element={(<CategoriesPage/>)}/>
          <Route path={ROUTES.products.path} element={(<ProductsPage/>)}/>
          <Route path={ROUTES.categoryId.path} element={(<ProductByCategoryPage/>)}/>
          <Route path={ROUTES.sale.path} element={(<SalesPage/>)}/>
          <Route path={ROUTES.cart.path} element={(<CartPage/>)}/>
          <Route path={ROUTES.productsId.path} element={(<ProductInfoPage/>)}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {/*</div>*/}
      </main>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
