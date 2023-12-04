import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { selectUserAuthData } from 'entities/User';
import { selectArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions } from 'features/AddCommentForm/models/slice/addCommentFormSlice';
import { selectAddCommentFormCommentText } from '../../models/selectors/addCommentForm';

// МОЖНО УДАЛИТЬ ФАЙЛ

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'addCommentForm/sendComment',
    async (_, thunkAPI) => {
        const dispatch = useAppDispatch();
        const userData = selectUserAuthData(thunkAPI.getState());
        const commentText = selectAddCommentFormCommentText(thunkAPI.getState());
        const article = selectArticleDetailsData(thunkAPI.getState());

        // if (!userData || !commentText || !article) {
        //     thunkAPI.rejectWithValue('no data');
        // }

        console.log('send Comment !!!!!!!!');

        const data = {
            articleId: article?.id,
            userId: userData?.id,
            text: commentText,
        };

        try {
            const response = await thunkAPI.extra.api.post<Comment>('/comments', data);

            if (!response.data) {
                throw new Error();
            }

            // dispatch(addCommentFormActions.setCommentText(''));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Error');
        }
    },
);
