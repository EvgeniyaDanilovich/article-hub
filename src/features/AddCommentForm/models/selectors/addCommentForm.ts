import { StateSchema } from 'app/providers/StoreProvider';

export const selectAddCommentFormCommentText = (state: StateSchema) => state.addCommentForm?.commentText;
export const selectAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
