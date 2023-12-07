import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { selectArticlePageHasMore, selectArticlePageIsLoading,
    selectArticlePageLimit, selectArticlePageNumber } from '../../selectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const hasMore = selectArticlePageHasMore(thunkAPI.getState());
        const isLoading = selectArticlePageIsLoading(thunkAPI.getState());
        const limit = selectArticlePageLimit(thunkAPI.getState());
        const page = selectArticlePageNumber(thunkAPI.getState());

        if (hasMore && !isLoading) {
            thunkAPI.dispatch(articlesPageActions.setPage(page + 1));
            thunkAPI.dispatch(fetchArticleList(page + 1));
        }
    },
);
