import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { selectUserAuthData, User } from 'entities/User';

interface updateUserAvatarProps {
    avatar: string;
    userId: string;
}

export const updateUserAvatar = createAsyncThunk<User, updateUserAvatarProps, ThunkConfig<string>>(
    'user/updateUserAvatar',
    async ({ avatar, userId }, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.patch(`/users/${userId}`, { avatar });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Error');
        }
    },
);
