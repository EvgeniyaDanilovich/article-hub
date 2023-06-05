import { createSlice } from '@reduxjs/toolkit';
import { UserScheme } from '../types/user';

const initialState: UserScheme = {
    authData: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
