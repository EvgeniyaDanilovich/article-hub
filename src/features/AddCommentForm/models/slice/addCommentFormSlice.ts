import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentFormSchema';

const initialState: AddCommentFormSchema = {
    commentText: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        // setCommentText(state, action: PayloadAction<string>) {
        //     state.commentText = action.payload;
        // },

        setCommentText: (state, action: PayloadAction<string>) => {
            state.commentText = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(.pending, (state) => {
        // });
        // builder.addCase(.fulfilled, (state, action: PayloadAction<>) => {
        // });
        // builder.addCase(.rejected, (state, action) => {
        // });
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
