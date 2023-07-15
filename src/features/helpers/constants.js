export const GMAP_API_KEY = "";
export const BASE_URL = "http://localhost:3333";

export const DEFAULT_POST_HEADERS = {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
};

export const ROUTES = {
  home: {
    path: "/"
  },
  sale: {
    path: "/sale"
  },
  catalog: {
    path: "/catalog"
  },
  category: {
    path: "/category"
  },
  categoryId: {
    path: "/category/:category_id"
  },
  products: {
    path: "/products"
  },
  productsId: {
    path: "/category/:category_id/product/:product_id"
  },
  cart: {
    path: "/cart"
  }
};
