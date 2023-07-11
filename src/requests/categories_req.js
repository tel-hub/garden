import axios from "../axios";

export const getCategories = () => {
  return axios.get("/categories/all")
    .then(res => res.data);
};

export const getCategory = (id) => {
  return axios.get(`/categories/${id}`)
    .then(res => res.data);
};

export const getProducts = () => {
  return axios.get(`/products/all`)
    .then(res => res.data);
};

export const getProductInfo = (product_id) => {
  return axios.get(`/products/${product_id}`)
    .then(res => res.data);
};

export const getUsers = () => {
  return axios.get(`/users/`)
    .then(res => res.data);
};

export const getUserInfo = (user_id) => {
  return axios.get(`/users/${user_id}`)
    .then(res => res.data);
};
