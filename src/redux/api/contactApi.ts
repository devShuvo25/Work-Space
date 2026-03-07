/* eslint-disable @typescript-eslint/no-explicit-any */
// contactApi.ts
import { baseApi } from "@/redux/api/baseApi";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    ////////////////////////////////////
    // Create Contact (Public)
    ////////////////////////////////////
    createContact: builder.mutation({
      query: (data ) => ({
        url: "/contacts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Contacts"],
    }),

    ////////////////////////////////////
    // Get All Contacts (ADMIN)
    ////////////////////////////////////
    getAllContacts: builder.query<
      any,
      {
        page?: number;
        limit?: number;
        search?: string;
        status?: string;
      }
    >({
      query: ({ page = 1, limit = 5, search = "", status = "" }) => ({
        url: "/contacts",
        method: "GET",
        params: {
          page,
          limit,
          search,
          status: status === "All" ? undefined : status,
        },
      }),
      providesTags: ["Contacts"],
    }),

    ////////////////////////////////////
    // Get Contact By ID
    ////////////////////////////////////
    getContactById: builder.query({
      query: ({ id }) => ({
        url: `/contacts/${id}`,
        method: "GET",
      }),
      providesTags: ["Contacts"],
    }),

    ////////////////////////////////////
    // Update Contact (Status / Info)
    ////////////////////////////////////
    updateContact: builder.mutation({
      query: ({ id, data }) => ({
        url: `/contacts/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Contacts"],
    }),

    ////////////////////////////////////
    // Delete Contact
    ////////////////////////////////////
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

////////////////////////////////////
// Hooks Export
////////////////////////////////////

export const {
  useCreateContactMutation,
  useGetAllContactsQuery,
  useGetContactByIdQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
