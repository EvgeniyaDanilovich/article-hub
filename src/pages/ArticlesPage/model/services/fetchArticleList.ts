import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Error');
        }
    },
);
