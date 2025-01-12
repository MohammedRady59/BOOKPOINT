import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const categorieApi = createApi({
  reducerPath: "categorie",
  tagTypes: ["Categorie"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (build) => ({
    allCategore: build.query({
      query: () => {
        return { url: "/categories/getAllCategories" };
      },
    }),
    CategoreName: build.query({
      query: (id) => {
        return { url: `/categories/getCategoryById/${id}` };
      },
    }),
    bookByCategore: build.query({
      query: (id) => {
        return { url: `/books/getByCategoryId/${id}?page=1` };
      },
    }),
  }),
});

export const {
  useAllCategoreQuery,
  useCategoreNameQuery,
  useBookByCategoreQuery,
} = categorieApi;
