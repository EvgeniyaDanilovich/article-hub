import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './CommentsList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentsListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentsList = memo(({ comments, isLoading, className }: CommentsListProps) => {
    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentsList, {}, [className])}>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentsList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard comment={comment} isLoading={isLoading} key={comment.id} />
                ))
                : <Text text={t('No comments')} />}
        </div>
    );
});
