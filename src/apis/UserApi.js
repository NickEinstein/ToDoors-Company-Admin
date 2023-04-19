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
    getCompanyStatistics: builder.query({
      query: (arg) => {
        return {
          url: `${BASE_URL}/company/companyStatistics`,
          method: "GET",
          // params: { userType },
        };
      },
    }),

    addBike: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/company/addBike`,
        method: "POST",
        ...config,
      }),
    }),

    updateBike: builder.mutation({
      query: (arg) => {
        const { userId } = arg;
        return {
          url: `${BASE_URL}/company/updateBike`,
          method: "PUT",
          ...arg,
          params: { userId },
        };
      },
    }),

    // updateBike: builder.mutation({
    //   query: (config) => ({
    //     url: `${BASE_URL}/company/updateBike`,
    //     method: "PUT",
    //     ...config,
    //   }),
    // }),

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
      query: (config) => {
        // const { pageNo } = arg;
        // console.log(pageNo)
        return {
          url: `${BASE_URL}/company/bikes`,
          method: "GET",
          ...config
          // params: { pageNo },
        };
      },
    }),

    getRiderTripStatistics: builder.query({
      query: (arg) => {
        // const { userType } = arg;
        return {
          url: `${BASE_URL}/company/companyTripStatics`,
          method: "GET",
          // params: { userType },
        };
      },
    }),

    getEarningsByMonth: builder.query({
      query: (arg) => {
        // const { userType } = arg;
        return {
          url: `${BASE_URL}/company/getTotalEarningsByMonth`,
          method: "GET",
          // params: { userType },
        };
      },
    }),

    getTripsByMonth: builder.query({
      query: (arg) => {
        // const { userType } = arg;
        return {
          url: `${BASE_URL}/company/getTotalTripsByMonth`,
          method: "GET",
          // params: { userType },
        };
      },
    }),

    getHistory: builder.query({
      query: (arg) => {
        const { to, from, riderId } = arg;
        return {
          url: `${BASE_URL}/company/history`,
          method: "GET",
          params: { to, from, riderId },
        };
      },
    }),

    getBanks: builder.query({
      query: (arg) => {
        // const { to, from, riderId } = arg;
        return {
          url: `${BASE_URL}/payment/getAllBanks`,
          method: "GET",
          // params: { to, from, riderId },
        };
      },
    }),
    updateUser: builder.mutation({
      query: (arg) => {
        // const { userId } = arg;
        return {
          url: `${BASE_URL}/users`,
          method: "PUT",
          ...arg,
          // params: { userId },
        };
      },
    }),
    updateUserUpload: builder.mutation({
      query: (arg) => {
        // const { userId } = arg;
        return {
          url: `${BASE_URL}/users/upload`,
          method: "PUT",
          ...arg,
          // params: { userId },
        };
      },
    }),

    getUser: builder.query({
      query: (arg) => {
        const { userId } = arg;
        return {
          url: `${BASE_URL}/users/getUserById`,
          method: "GET",
          params: { userId },
        };
      },
    }),
  }),
});

export default UserApi;
