import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        // const formData = thunkAPI.getState().profile?.form;
        const formData = selectProfileForm(thunkAPI.getState());
        // console.log(`response: ${formData}`);

        try {
            const response = await thunkAPI.extra.api.put('/profile', formData);

            console.log(`response: ${response}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Error');
        }
    },
);
