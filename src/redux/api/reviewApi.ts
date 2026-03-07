// reviewApi.ts
import { baseApi } from "@/redux/api/baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 4.1 Create Review (USER)
    createReview: builder.mutation({
      query: ({ data }) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Reviews"],
    }),

    // 4.3 Get My Reviews (reviews I gave)
    getMyReviews: builder.query({
      query: () => ({
        url: "/reviews/my-reviews",
        method: "GET",
      }),
      providesTags: ["Reviews"],
    }),

    // 4.4 Get Received Reviews (DESIGNER)
    getReceivedReviews: builder.query({
      query: () => ({
        url: "/reviews/received",
        method: "GET",
      }),
      providesTags: ["Reviews"],
    }),

    // 4.5 Get Profile Reviews (Public)
    getProfileReviews: builder.query({
      query: ({ profileId }) => ({
        url: `/reviews/profile/${profileId}`,
        method: "GET",
      }),
      providesTags: ["Reviews"],
    }),

    // 4.6 Update My Review
    updateReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "PUT", // or PATCH
        body: data,
      }),
      invalidatesTags: ["Reviews"],
    }),

    // 4.7 Delete My Review
    deleteReview: builder.mutation({
      query: ({ id }) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Reviews"],
    }),

    // 4.8 Approve Review (ADMIN)
    approveReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}/approve`,
        method: "PATCH",
        body: data, // { isApproved: true }
      }),
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetMyReviewsQuery,
  useGetReceivedReviewsQuery,
  useGetProfileReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useApproveReviewMutation,
} = reviewApi;
