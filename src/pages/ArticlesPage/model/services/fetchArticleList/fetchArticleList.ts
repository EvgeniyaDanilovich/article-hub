import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { selectArticlePageLimit } from '../../selectors/articlesPageSelectors';

export const fetchArticleList = createAsyncThunk<Article[], number, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (page, thunkAPI) => {
        const limit = selectArticlePageLimit(thunkAPI.getState());

        try {
            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
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
