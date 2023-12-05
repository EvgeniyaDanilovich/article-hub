import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const selectArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const selectArticlePageError = (state: StateSchema) => state.articlesPage?.error;
export const selectArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
