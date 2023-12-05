import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Card } from 'shared/ui/Card/Card';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({ view, className }: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.LARGE) {
        return (
            <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" className={cls.avatar} />
                        <Skeleton height={16} width={150} className={cls.username} />
                        <Skeleton height={16} width={100} className={cls.data} />
                    </div>

                    <Skeleton height={24} width={250} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />

                    <div className={cls.infoWrapper}>
                        <Skeleton height={36} width={200} className={cls.btnMore} />
                        <Skeleton height={16} width={60} className={cls.views} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imgWrapper}>
                    <Skeleton height={240} width={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton height={16} width={130} className={cls.type} />
                </div>
                <Skeleton height={20} width={170} className={cls.title} />
            </Card>
        </div>
    );
});
