import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: "POST",
        body: data,
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/update-profile`,
        method: "PUT",
        body: data,
      }),
    }),
    getAllUsers: builder.mutation({
      query: () => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLogoutMutation,
  useLoginMutation,
  useSignupMutation,
  useUpdateProfileMutation,
  useGetAllUsersMutation,
} = userApiSlice;
