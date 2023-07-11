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
//import ProductInfoPage from "./pages/ProductInfoPage";
//import UsersList from "./pages/UsersList";
//import UserInfoPage from "./pages/UserInfoPage";

function App() {
  const dispatch = useDispatch();
  const scrollPosition = useScroll();
  const pageScrolled = useSelector((state) => state.interface.pageScrolled);

  useEffect(() => {
    let newScrolled = scrollPosition > 100;

    if (pageScrolled !== newScrolled) {
      dispatch(pageScrolledToggle(newScrolled));
    }

  }, [scrollPosition, pageScrolled]);

  //const getCategories = async () => {
  //  return await axios.get('/categories/all').then(res => {
  //    return res.data;
  //  });
  //}

  let location = useLocation();

  return (
    <React.Fragment>
      <Header/>

      <main className="content">
        <Routes>
          <Route path={ROUTES.home.path} element={(<MainPage/>)}/>
          <Route path={ROUTES.catalog.path} element={(<CategoriesPage/>)}/>
          <Route path={ROUTES.products.path} element={(<ProductsPage/>)}/>
          <Route path={ROUTES.productsId.path} element={(<ProductByCategoryPage/>)}/>
          {/*<Route path="/products/:category_id/product/:product_id" element={(<ProductInfoPage/>)}/>*/}
          {/*<Route path="/users/:user_role" element={(<UsersList/>)}/>*/}
          {/*<Route path="/user/:user_id" element={(<UserInfoPage/>)}/>*/}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
