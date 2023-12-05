import { Article, ArticleView } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article>{
    error?: string,
    isLoading?: boolean,
    view: ArticleView,
}
