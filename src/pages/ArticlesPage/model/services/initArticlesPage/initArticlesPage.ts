import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { fetchArticleList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import { selectArticlePageInitialized } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const initialized = selectArticlePageInitialized(thunkAPI.getState());

        if (!initialized) {
            thunkAPI.dispatch(articlesPageActions.initState());
            thunkAPI.dispatch(fetchArticleList(1));
        }
    },
);
