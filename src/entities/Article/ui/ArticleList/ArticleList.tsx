import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation('article');
    const { articles, isLoading, view = ArticleView.SMALL, className } = props;

    const renderArticle = (article: Article) => {
        return <ArticleListItem article={article} view={view} key={article.id} />;
    };

    if (!isLoading && !articles.length) {
        return (<Text text={t('Articles not found')} />);
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.map(renderArticle)}
            {isLoading && new Array(view === ArticleView.SMALL ? 9 : 3)
                .fill(0)
                .map((item, index) => (
                    <ArticleListItemSkeleton view={view} key={index} />
                ))}
        </div>
    );
});
