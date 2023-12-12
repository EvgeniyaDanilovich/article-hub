import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Icon, IconColor } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Article, ArticleBlockTypes, ArticleTextBlock, ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo(({ article, view, className }: ArticleListItemProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockTypes.TEXT,
    ) as ArticleTextBlock;

    const types = <Text text={article.type.join(', ')} className={cls.type} theme={TextTheme.SECONDARY} />;
    const views = (
        <div className={cls.views}>
            <Text text={String(article.views)} theme={TextTheme.SECONDARY} />
            <Icon Svg={EyeIcon} color={IconColor.SECONDARY} />
        </div>
    );

    if (view === ArticleView.LARGE) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar src={article.user.avatar} size={30} className={cls.avatar} />
                        <Text title={article.user.username} className={cls.username} size={TextSize.three} />
                        <Text text={article.createdAt} className={cls.data} />
                        {views}
                    </div>

                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text title={article.title} className={cls.title} />
                    {types}

                    <div className={cls.infoWrapper}>
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                isShowTitle={false}
                                className={cls.paragraph}
                            />
                        )}
                        <Button
                            onClick={onOpenArticle}
                            className={cls.btnMore}
                            theme={ButtonTheme.BACKGROUND}
                        >
                            {t('Read more')}
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imgWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.data} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text title={article.title} className={cls.title} size={TextSize.three} />
            </Card>
        </div>
    );
});
