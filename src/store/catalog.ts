import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GetUsersResponse, User } from '../App.types';

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersResponse, void>({
      query: () => 'users',
    }),
    getUser: builder.query<User, string>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
} = catalogApi;
