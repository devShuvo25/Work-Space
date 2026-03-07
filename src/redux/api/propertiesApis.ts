import { baseApi } from "./baseApi";
import {
  PropertiesApiResponse,
  Property,
  TransformedPropertiesResponse,
} from "@/types/api";

export const propertiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all properties
    getAllProperties: builder.query<
      TransformedPropertiesResponse,
      {
        searchTerm?: string;
        category?: string;
        subType?: string;
        location?: string;
        minPrice?: string;
        maxPrice?: string;
        page?: number;
        limit?: number;
      }
    >({
      // searchTerm?: string;
      // category?: string;
      // subType?: string;
      // status?: string;
      // minPrice?: number;
      // maxPrice?: number;
      query: ({
        searchTerm,
        category,
        subType,
        location,
        minPrice,
        maxPrice,
        page = 1,
        limit = 10,
      }) => ({
        url: "/properties",
        method: "GET",
        params: {
          searchTerm,
          category,
          subType,
          location,
          minPrice,
          maxPrice,
          page,
          limit,
        },
      }),
      providesTags: ["properties"],
      transformResponse: (res: PropertiesApiResponse) => ({
        properties: res.data,
        meta: res.meta,
      }),
    }),

    // Get property by ID
    getPropertyById: builder.query<Property, { id: string }>({
      query: ({ id }) => ({
        url: `/properties/${id}`,
        method: "GET",
      }),
      providesTags: ["properties"],
    }),

    // Create a new property
    // createProperty: builder.mutation<Property, { data: Partial<Property> }>({
    //   query: ({ data }) => ({
    //     url: "/properties",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["properties"],
    // }),

    createProperty: builder.mutation<Property, FormData>({
      query: (formData) => ({
        url: "/properties",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["properties"],
    }),

    // // Update a property
    // updateProperty: builder.mutation<
    //   Property,
    //   { id: string; data: Partial<Property> }
    // >({
    //   query: ({ id, data }) => ({
    //     url: `/properties/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["properties"],
    // }),

    updateProperty: builder.mutation<
      Property,
      { id: string; data: FormData } // <-- change Partial<Property> to FormData
    >({
      query: ({ id, data }) => ({
        url: `/properties/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["properties"],
    }),

    // Delete a property
    deleteProperty: builder.mutation<{ success: boolean }, { id: string }>({
      query: ({ id }) => ({
        url: `/properties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["properties"],
    }),
  }),
});

export const {
  useGetAllPropertiesQuery,
  useGetPropertyByIdQuery,
  useCreatePropertyMutation,
  useUpdatePropertyMutation,
  useDeletePropertyMutation,
} = propertiesApi;
