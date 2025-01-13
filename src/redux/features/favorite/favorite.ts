import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const localData =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
export const favoriteapi = createApi({
  reducerPath: "favorite",
  tagTypes: ["Favorite"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (build) => ({
    addFavorite: build.mutation({
      query: (body) => {
        return {
          url: "/favorites/addFavorite",
          method: "POST",
          body,
          headers: { Authorization: `Bearer ${localData} ` },
        };
      },
      invalidatesTags: [{ type: "Favorite", id: "LIST" }],
    }),
    deleteFavorite: build.mutation({
      query: (id) => {
        return {
          url: `/favorites/deleteFavorite/${id}`,
          method: "DELETE",
          headers: { Authorization: `Bearer ${localData} ` },
        };
      },
      invalidatesTags: [{ type: "Favorite", id: "LIST" }],
    }),
    allFav: build.query({
      query: () => {
        return {
          url: "/favorites/allFavorites",
          headers: { Authorization: `Bearer ${localData} ` },
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.payload.books.map(({ id }: { id: number }) => ({
                type: "Favorite" as const,
                id,
              })),
              { type: "Favorite", id: "LIST" },
            ]
          : [{ type: "Favorite", id: "LIST" }],
    }),
  }),
});

export const {
  useDeleteFavoriteMutation,
  useAllFavQuery,
  useAddFavoriteMutation,
} = favoriteapi;
