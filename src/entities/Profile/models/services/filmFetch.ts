import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export interface Film {
    id: string;
    description: string;
    genre: string[];
    image: string;
    rank: number;
    rating: string;
    thumbnail: string;
    title: string;
    year: number;
}

export const filmApi = createApi({
    reducerPath: 'filmApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://imdb-top-100-movies.p.rapidapi.com',
    }),
    endpoints: (builder) => ({
        getFilm: builder.query<Film, any>({
            query: () => '/',
        }),
    }),
});

// export const { useGetFilmQuery } = filmApi;
// export const usu = filmApi.use
