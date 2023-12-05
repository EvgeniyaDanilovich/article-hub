import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ViewSwitcher } from 'widgets/ViewSwitcher';
import cls from './ArticlesPage.module.scss';
import { articlesPageActions, articlesPageReducer, selectArticles } from '../model/slices/articlesPageSlice';
import { fetchArticleList } from '../model/services/fetchArticleList';
import {
    selectArticlePageError,
    selectArticlePageIsLoading,
    selectArticlePageView,
} from '../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(selectArticles.selectAll);
    const isLoading = useSelector(selectArticlePageIsLoading);
    const error = useSelector(selectArticlePageError);
    const view = useSelector(selectArticlePageView);

    useInitialEffect(() => {
        dispatch(fetchArticleList());
        dispatch(articlesPageActions.initState());
    });

    // if (error) {
    //     return <Text text={t('Something went wrong. Read page')} theme={TextTheme.ERROR} />;
    // }

    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                {t('Articles')}
                <ViewSwitcher view={view} onViewClick={onViewClick} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>

    );
});

export default ArticlesPage;
