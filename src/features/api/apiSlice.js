import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL, DEFAULT_POST_HEADERS} from "../helpers/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (category_id) => `/categories/${category_id}`,
      transformResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue;
      }
    }),
    getProducts: builder.query({
      query: (product_id) => `/products/${product_id}`,
      transformResponse(baseQueryReturnValue, meta, arg) {
        return {data: baseQueryReturnValue};
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
        ...DEFAULT_POST_HEADERS,
        url: "/sale/send",
        body
      })
    }),
    postOrder: builder.mutation({
      query: (body) => ({
        ...DEFAULT_POST_HEADERS,
        url: "/order/send",
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
