import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '1a616a8ac6mshe95b51152467176p1cb228jsnd8d89a51ead5',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//   },
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: ((headers) => {
      headers.set('X-RapidAPI-Key', '1a616a8ac6mshe95b51152467176p1cb228jsnd8d89a51ead5');

      return headers;
    }),
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
