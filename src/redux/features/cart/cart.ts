import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const localData = localStorage.getItem("token");
export const cartapi = createApi({
  reducerPath: "cart",
  tagTypes: ["Cart"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (build) => ({
    addCart: build.mutation({
      query: (body) => {
        return {
          url: "/carts/addToCart",
          method: "POST",
          body,
          headers: { Authorization: `Bearer ${localData} ` },
        };
      },
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
    deleteCart: build.mutation({
      query: (id) => {
        return {
          url: `/carts/deleteFromCart/${id}`,
          method: "DELETE",
          headers: { Authorization: `Bearer ${localData} ` },
        };
      },
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
    allCart: build.query({
      query: () => {
        return {
          url: "/carts/allCartBooks",
          headers: { Authorization: `Bearer ${localData} ` },
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.payload.books.map(({ id }: { id: number }) => ({
                type: "Cart" as const,
                id,
              })),
              { type: "Cart", id: "LIST" },
            ]
          : [{ type: "Cart", id: "LIST" }],
    }),
  }),
});

export const { useAddCartMutation, useAllCartQuery, useDeleteCartMutation } =
  cartapi;
