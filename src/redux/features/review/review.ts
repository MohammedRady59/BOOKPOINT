import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const localData =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;
export const reviewapi = createApi({
  reducerPath: "review",
  tagTypes: ["Review"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (build) => ({
    allRev: build.query({
      query: (id) => {
        return {
          url: `/reviews/getBookReviews/${id}`,
          headers: { Authorization: `Bearer ${localData}` },
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.payload.reviews.map(({ id }: { id: number }) => ({
                type: "Review" as const,
                id,
              })),
              { type: "Review", id: "LIST" },
            ]
          : [{ type: "Review", id: "LIST" }],
    }),
    addReview: build.mutation({
      query: (body) => {
        return {
          url: "/reviews/addReview",
          method: "POST",
          body,
          headers: { Authorization: `Bearer ${localData}` },
        };
      },
      invalidatesTags: [{ type: "Review", id: "LIST" }],
    }),
  }),
});

export const { useAllRevQuery, useAddReviewMutation } = reviewapi;
