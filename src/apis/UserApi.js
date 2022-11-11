import { todoorsApi } from "configs/StoreQueryConfig";

const BASE_URL = "/api";

export const UserApi = todoorsApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/users/register`,
        method: "POST",
        ...config,
      }),
    }),
    login: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/auth/login`,
        method: "POST",
        ...config,
      }),
    }),

    addBike: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/company/addBike`,
        method: "POST",
        ...config,
      }),
    }),

    deleteBike: builder.mutation({
      
      query: (config) => ({
        url: `${BASE_URL}/company/deleteBike`,
        method: "DELETE",
        ...config,
      }),
    }),

    // getAllBikes: builder.mutation({
    //   query: (config) => ({
    //     url: `${BASE_URL}/company/bikes`,
    //     method: "GET",
    //     ...config,
    //   }),
    // }),

    getAllBikes: builder.query({
      query: (arg) => {
        // const { userType } = arg;
        return {
          url: `${BASE_URL}/company/bikes`,
          method: "GET",
          // params: { userType },
        };
      },
    }),
  }),
});

export default UserApi;
