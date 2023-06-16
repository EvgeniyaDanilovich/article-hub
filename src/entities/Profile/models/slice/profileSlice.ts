import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: '',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(.pending, (state) => {
    //     });
    //     builder.addCase(.fulfilled, (state, action) => {
    //     });
    //     builder.addCase(.rejected, (state, action) => {
    //     });
    // },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
