import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

// TODO: createAsyncThunk
// createAsyncThunk - это action creator, кот после вызова по итогу возвр action,
// action попадает в dispatch и мы возвр какие-то данные

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            // const response = await axios.post<User>('/login', authData);
            const response = await thunkAPI.extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.extra.navigate(RoutePath.about);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Wrong name or password');
        }
    },
);
