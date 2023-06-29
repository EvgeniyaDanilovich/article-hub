import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';
import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const formData = selectProfileForm(thunkAPI.getState());
        const errors = validateProfileData(formData);

        if (errors.length) {
            return thunkAPI.rejectWithValue(errors);
        }

        try {
            const response = await thunkAPI.extra.api.put('/profile', formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    },
);
