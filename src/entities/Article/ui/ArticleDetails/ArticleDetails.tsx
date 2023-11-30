import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import {
    selectArticleDetailsData,
    selectArticleDetailsError,
    selectArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockTypes } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

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
    const isLoading = useSelector(selectArticleDetailsIsLoading);
    const error = useSelector(selectArticleDetailsError);
    const article = useSelector(selectArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockTypes.CODE:
            return <ArticleCodeBlockComponent block={block} key={block.id} className={cls.block} />;
        case ArticleBlockTypes.IMAGE:
            return <ArticleImageBlockComponent block={block} key={block.id} className={cls.block} />;
        case ArticleBlockTypes.TEXT:
            return <ArticleTextBlockComponent block={block} key={block.id} className={cls.block} />;
        default:
            return null;
        }
    }, []);

    // useEffect(() => {
    //     if (__PROJECT__ !== 'storybook') {
    //         dispatch(fetchArticleById(articleId));
    //     }
    // }, [articleId, dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticleById(articleId));
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton height={150} width={150} border="50%" className={cls.avatar} />
                <Skeleton height={32} width={300} className={cls.title} />
                <Skeleton height={24} width={600} className={cls.skeleton} />
                <Skeleton height={150} width="100%" className={cls.skeleton} />
                <Skeleton height={150} width="100%" className={cls.skeleton} />
            </>
        );
    } else if (error) {
        content = <Text text={t('An error occurred while loading the article')} theme={TextTheme.ERROR} />;
    } else {
        content = (
            <>
                {article?.img && <Avatar src={article?.img} size={150} className={cls.avatar} />}
                <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks?.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>

            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
