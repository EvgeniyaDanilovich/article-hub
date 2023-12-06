import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentsList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { selectArticleCommentsError, selectArticleCommentsIsLoading } from '../model/selectors/comments';
import { articleDetailsCommentsReducer, selectArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    const comments = useSelector(selectArticleComments.selectAll);
    const commentsIsLoading = useSelector(selectArticleCommentsIsLoading);
    const commentsError = useSelector(selectArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((commentText: string) => {
        dispatch(addCommentForArticle(commentText));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (commentsError) {
        return (<div>{commentsError}</div>);
    }

    if (!id) {
        return (<div>{t('Article not found')}</div>);
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button onClick={onBackToList}>{t('Back to list')}</Button>
                <ArticleDetails articleId={id} />
                <Text title={t('Comments')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentsList comments={comments} isLoading={commentsIsLoading} />
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
