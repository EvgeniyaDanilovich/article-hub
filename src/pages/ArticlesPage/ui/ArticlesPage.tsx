import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ViewSwitcher } from 'widgets/ViewSwitcher';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import cls from './ArticlesPage.module.scss';
import { articlesPageActions, articlesPageReducer, selectArticles } from '../model/slices/articlesPageSlice';
import { fetchArticleList } from '../model/services/fetchArticleList/fetchArticleList';
import { selectArticlePageIsLoading, selectArticlePageView } from '../model/selectors/articlesPageSelectors';

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
    const view = useSelector(selectArticlePageView);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticleList(1));
    });

    const onViewClick = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    // if (error) {
    //     return <Text text={t('Something went wrong. Read page')} theme={TextTheme.ERROR} />;
    // }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                {t('Articles')}
                <ViewSwitcher view={view} onViewClick={onViewClick} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>

    );
});

export default ArticlesPage;
