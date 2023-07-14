import React, { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { selectArticleDetailsData, selectArticleDetailsError } from '../../model/selectors/articleDetails';

interface ArticleDetailsProps {
    className?: string;
    articleId: string,
}

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, articleId }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    // const isLoading = useSelector(selectArticleDetailsIsLoading);
    const isLoading = true;
    const error = useSelector(selectArticleDetailsError);
    const article = useSelector(selectArticleDetailsData);

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, [articleId, dispatch]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton height={150} width={150} border="50%" className={cls.avatar} />
                <Skeleton height={32} width={300} className={cls.title} />
                <Skeleton height={24} width={600} className={cls.skeleton} />
                <Skeleton height={150} width="100%" className={cls.skeleton} />
                <Skeleton height={150} width="100%" className={cls.skeleton} />
            </div>
        );
    } else if (error) {
        content = <Text text={t('An error occurred while loading the article')} theme={TextTheme.ERROR} />;
    } else {
        content = <div>{t('Article Details')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>

            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
