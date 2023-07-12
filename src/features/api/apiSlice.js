import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../helpers/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  //tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories/all",
      //providesTags: (result, error, id) => {
      //  console.log("providesTags", result, id);
      //  return [{type: "Categories", id}];
      //},
      transformResponse(baseQueryReturnValue, meta, arg) {
        console.log("transformResponse", baseQueryReturnValue, meta, arg);

        return baseQueryReturnValue;
      }
    }),
    getProducts: builder.query({
      query: () => "/products/all",
      //providesTags: (result, error, id) => {
      //  console.log("providesTags", result, id);
      //  return [{type: "Categories", id}];
      //},
      transformResponse(baseQueryReturnValue, meta, arg) {
        console.log("transformResponse", baseQueryReturnValue, meta, arg);

        return baseQueryReturnValue;
      }
    }),
    getSales: builder.query({
      query: () => "/products/all",
      //providesTags: (result, error, id) => {
      //  console.log("providesTags", result, id);
      //  return [{type: "Categories", id}];
      //},
      transformResponse(baseQueryReturnValue, meta, arg) {
        console.log("transformResponse", baseQueryReturnValue, meta, arg);

        return baseQueryReturnValue.reduce((acc, item) => {
          if (acc.findIndex(f => f.categoryId === item.categoryId) === -1) {
            acc.push(item);
          }

          return acc;
        }, []);
      }
    })
  })
});

export const {useGetCategoriesQuery, useGetProductsQuery, useGetSalesQuery} = apiSlice;
