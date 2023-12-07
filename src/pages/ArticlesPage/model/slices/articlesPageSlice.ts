import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/ArticlesPageSchema';
import { Article, ArticleView } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';

const articlesPageAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const selectArticles = articlesPageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesPageAdapter.getInitialState(),
);

export const ArticlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
        view: ArticleView.SMALL,
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        _initialized: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },

        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },

        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LARGE ? 4 : 9;
            state._initialized = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticleList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            articlesPageAdapter.addMany(state, action.payload);
            state.hasMore = action.payload.length > 0;
        });
        builder.addCase(fetchArticleList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: articlesPageActions } = ArticlesPageSlice;
export const { reducer: articlesPageReducer } = ArticlesPageSlice;
