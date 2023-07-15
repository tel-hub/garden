import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../helpers/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (category_id) => `/categories/${category_id}`,
      transformResponse(baseQueryReturnValue, meta, arg) {
        console.log("transformResponse", baseQueryReturnValue, meta, arg);

        return baseQueryReturnValue;
      }
    }),
    getProducts: builder.query({
      query: (product_id) => `/products/${product_id}`,
      transformResponse(baseQueryReturnValue, meta, arg) {
        console.log("transformResponse", baseQueryReturnValue, meta, arg);
        return baseQueryReturnValue;
      }
    }),
    getSales: builder.query({
      query: () => "/products/all",
      transformResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.reduce((acc, item) => {
          if (item.discont_price !== null) {
            acc.push(item);
          }

          return acc;
        }, []);
      }
    }),
    postSale: builder.mutation({
      query: (body) => ({
        url: "/sale/send",
        method: "POST",
        body
      })
    }),
    postOrder: builder.mutation({
      query: (body) => ({
        url: "/order/send",
        method: "POST",
        body
      })
    })
  })
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetSalesQuery,
  usePostSaleMutation,
  usePostOrderMutation
} = apiSlice;
