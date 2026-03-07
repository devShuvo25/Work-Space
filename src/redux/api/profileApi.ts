/* eslint-disable @typescript-eslint/no-explicit-any */
// profileApi.ts
import { baseApi } from "@/redux/api/baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 2.1 Create Profile
    createProfile: builder.mutation({
      query: ({ data }) => ({
        url: "/profiles",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Profiles"],
    }),

    // 2.2 Get My Profile
    getMyProfile: builder.query({
      query: () => ({
        url: "/profiles/me",
        method: "GET",
      }),
      providesTags: ["Profiles"],
    }),

    // 2.3 Update My Profile
    updateMyProfile: builder.mutation({
      query: ({ data }) => ({
        url: "/profiles/me",
        method: "PUT", // or PATCH if backend supports
        body: data,
      }),
      invalidatesTags: ["Profiles"],
    }),

    // 2.4 Get Profile by Username (Public)
    getProfileByUsername: builder.query({
      query: ({ username }) => ({
        url: `/profiles/${username}`,
        method: "GET",
      }),
      providesTags: ["Profiles"],
    }),

    // 2.5 Get All Profiles (Public - with filters)
    getAllProfiles: builder.query({
      query: ({
        district,
        specializations,
        minBudget,
        maxBudget,
        page = 1,
        limit = 10,
      }) => ({
        url: "/profiles",
        method: "GET",
        params: {
          district,
          specializations,
          minBudget,
          maxBudget,
          page,
          limit,
        },
      }),
      providesTags: ["Profiles"],
      transformResponse: (response: any) => ({
        profiles: response.data,
        meta: response.meta, // { page, limit, total, totalPages }
      }),
    }),

    // 2.6 Search Profiles by Name/Bio
    searchProfiles: builder.query({
      query: ({ searchTerm }) => ({
        url: "/profiles",
        method: "GET",
        params: { searchTerm },
      }),
      providesTags: ["Profiles"],
    }),

    // 2.7 Delete My Profile
    deleteMyProfile: builder.mutation({
      query: () => ({
        url: "/profiles/me",
        method: "DELETE",
      }),
      invalidatesTags: ["Profiles"],
    }),
  }),
});

export const {
  useCreateProfileMutation,
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useGetProfileByUsernameQuery,
  useGetAllProfilesQuery,
  useSearchProfilesQuery,
  useDeleteMyProfileMutation,
} = profileApi;
