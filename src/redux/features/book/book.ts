import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const bookapi = createApi({
  reducerPath: "book",
  tagTypes: ["Book"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (build) => ({
    books: build.query({
      query: () => {
        return { url: "/books/getRecentlyUploaded?page=1" };
      },
    }),
    getBook: build.query({
      query: (id) => {
        return { url: `/books/getById/${id}` };
      },
    }),
  }),
});

export const { useBooksQuery, useGetBookQuery } = bookapi;
