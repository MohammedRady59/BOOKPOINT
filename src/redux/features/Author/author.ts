import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authorapi = createApi({
  reducerPath: "author",
  tagTypes: ["Author"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (build) => ({
    allAuthor: build.query({
      query: () => {
        return { url: "/authors" };
      },
    }),
    booksAuthor: build.query({
      query: (id) => {
        return { url: `/authors/getAuthorById/${id}` };
      },
    }),
  }),
});

export const { useAllAuthorQuery, useBooksAuthorQuery } = authorapi;
