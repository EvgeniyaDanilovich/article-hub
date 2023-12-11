import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User } from 'entities/User';
import { addProfileData } from 'pages/ProfilePage';

interface addNewUserProps {
    username: string;
    password: string;
}

// {"id":"1","username":"eva","password":"123","role":"ADMIN","avatar":"https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png"}

export const addNewUser = createAsyncThunk<User, addNewUserProps, ThunkConfig<string>>(
    'login/addNewUser',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post('/users', {
                username,
                password,
                role: 'USER',
                avatar: '',
            });

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(addProfileData({ userId: response.data.id, username }));
            console.log(response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Error');
        }
    },
);
