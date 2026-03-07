// inquiryApi.ts
import { baseApi } from "@/redux/api/baseApi";

export const inquiryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 5.1 Create Inquiry (USER)
    createInquiry: builder.mutation({
      query: ({ data }) => ({
        url: "/inquiries",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Inquiries"],
    }),

    // 5.3 Get My Sent Inquiries (USER)
    getSentInquiries: builder.query({
      query: () => ({
        url: "/inquiries/sent",
        method: "GET",
      }),
      providesTags: ["Inquiries"],
    }),

    // 5.4 Get Received Inquiries (DESIGNER)
    // 5.5 Get Received Inquiries (with optional isRead filter)
    getReceivedInquiries: builder.query({
      query: ({ isRead }: { isRead?: boolean }) => ({
        url: "/inquiries/received",
        method: "GET",
        params: {
          isRead,
        },
      }),
      providesTags: ["Inquiries"],
    }),

    // 5.6 Get Inquiry by ID
    getInquiryById: builder.query({
      query: ({ id }) => ({
        url: `/inquiries/${id}`,
        method: "GET",
      }),
      providesTags: ["Inquiries"],
    }),

    // 5.7 Mark Inquiry as Read (DESIGNER)
    markInquiryAsRead: builder.mutation({
      query: ({ id, data }) => ({
        url: `/inquiries/${id}/read`,
        method: "PATCH",
        body: data, // { isRead: true }
      }),
      invalidatesTags: ["Inquiries"],
    }),

    // 5.8 Delete Inquiry (USER)
    deleteInquiry: builder.mutation({
      query: ({ id }) => ({
        url: `/inquiries/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Inquiries"],
    }),
  }),
});

export const {
  useCreateInquiryMutation,
  useGetSentInquiriesQuery,
  useGetReceivedInquiriesQuery,
  useGetInquiryByIdQuery,
  useMarkInquiryAsReadMutation,
  useDeleteInquiryMutation,
} = inquiryApi;
