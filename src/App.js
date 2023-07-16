import React, {useEffect} from "react";
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
  const pageScrolled = useSelector((state) => state.interface.pageScrolled);

  useEffect(() => {
    let newScrollTop = scrollPosition > 100;

    if (pageScrolled !== newScrollTop) {
      dispatch(pageScrolledToggle(newScrollTop));
    }
  }, [scrollPosition, pageScrolled, dispatch]);

  return (
    <React.Fragment>
      <Header prevLocation={prevLocation}/>

      <main className="content">
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} appear={true} classNames="page-transition" timeout={{enter: 400, exit: 400}}
          >
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
