import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const selectArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const selectArticlePageError = (state: StateSchema) => state.articlesPage?.error;
export const selectArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const selectArticlePageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const selectArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit || 4;
export const selectArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const selectArticlePageInitialized = (state: StateSchema) => state.articlesPage?._initialized;
