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
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageActions, articlesPageReducer, selectArticles } from '../model/slices/articlesPageSlice';
import { selectArticlePageIsLoading, selectArticlePageView } from '../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';

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
        dispatch(initArticlesPage());
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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <div className={cls.header}>
                    <Text
                        title={t('Articles')}
                        size={TextSize.seven}
                        className={cls.title}
                        weight={TextWeight.SEMIBOLD}
                    />
                    <ViewSwitcher view={view} onViewClick={onViewClick} />
                </div>

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
