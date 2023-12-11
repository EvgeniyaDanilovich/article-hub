import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

interface addProfileDataProps {
    userId: string,
    username: string
}

export const addProfileData = createAsyncThunk<Profile, addProfileDataProps, ThunkConfig<string>>(
    'profile/addProfileData',
    async ({ username, userId }, thunkAPI) => {
        const profile = {
            id: userId,
            first: username,
            lastname: '',
            age: undefined,
            city: '',
            username: '',
            avatar: '',
            currency: '',
            country: '',
        };

        try {
            const response = await thunkAPI.extra.api.post('/profile', profile);

            if (!response.data) {
                throw new Error();
            }
            console.log(response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Error');
        }
    },
);
