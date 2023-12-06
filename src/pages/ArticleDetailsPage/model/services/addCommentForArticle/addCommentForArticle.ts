import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { selectUserAuthData } from 'entities/User';
import { selectArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (commentText, thunkAPI) => {
        const userData = selectUserAuthData(thunkAPI.getState());
        const article = selectArticleDetailsData(thunkAPI.getState());

        if (!userData || !commentText || !article) {
            thunkAPI.rejectWithValue('no data');
        }

        try {
            const response = await thunkAPI.extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text: commentText,
            });

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(fetchCommentsByArticleId(article?.id));

            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
