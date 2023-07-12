import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import "./App.scss";
import {ROUTES} from "./helpers/constants";
import {pageScrolledToggle} from "./slices/interfaceSlice";
import {useDispatch, useSelector} from "react-redux";
import {useScroll} from "./features/helpers/helpers";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
//import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import ProductByCategoryPage from "./pages/ProductByCategoryPage";
import CategoriesPage from "./pages/CategoriesPage";
import Preloader from "./components/Preloader";
import CartPage from "./pages/CartPage";
//import ProductInfoPage from "./pages/ProductInfoPage";
//import UsersList from "./pages/UsersList";
//import UserInfoPage from "./pages/UserInfoPage";

function App() {
  const dispatch = useDispatch();
  const scrollPosition = useScroll();
  const pageScrolled = useSelector((state) => state.interface.pageScrolled);
  let location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    let newScrolled = scrollPosition > 100;

    if (pageScrolled !== newScrolled) {
      dispatch(pageScrolledToggle(newScrolled));
    }

  }, [scrollPosition, pageScrolled]);


  useEffect(() => {
    if (location !== displayLocation) {
      setTransistionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (
    <React.Fragment>
      <Header/>

      <main className="content">
        <div
          className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }
          }}
        >
          <Routes location={displayLocation}>
            <Route path={ROUTES.home.path} element={(<MainPage/>)}/>
            <Route path={ROUTES.catalog.path} element={(<CategoriesPage/>)}/>
            <Route path={ROUTES.products.path} element={(<ProductsPage/>)}/>
            <Route path={ROUTES.categoryId.path} element={(<ProductByCategoryPage/>)}/>
            <Route path={ROUTES.cart.path} element={(<CartPage/>)}/>
            {/*<Route path={ROUTES.productsId.path} element={(<ProductInfoPage/>)}/>*/}
            {/*<Route path="/users/:user_role" element={(<UsersList/>)}/>*/}
            {/*<Route path="/user/:user_id" element={(<UserInfoPage/>)}/>*/}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </main>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
