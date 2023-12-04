import { ProfileSchema, ValidateProfileErrors } from 'pages/ProfilePage/models/types/profile';
import { profileActions, profileReducer } from 'pages/ProfilePage/models/slice/profileSlice';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from 'pages/ProfilePage/models/services/updateProfileData/updateProfileData';

const dataProfile: Profile = {
    id: '1',
    first: 'Eva',
    lastname: 'Di',
    age: 23,
    country: Country.BELARUS,
    currency: Currency.BYN,
    username: 'admin',
    city: 'Grodno',
};

describe('profileSlice', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false)))
            .toEqual({ readonly: false });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: dataProfile,
            form: { username: '' },
        };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateProfileErrors: undefined,
                data: dataProfile,
                form: dataProfile,
            });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '123' },
        };

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '777777' })))
            .toEqual({
                form: { username: '777777' },
            });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateProfileErrors: [ValidateProfileErrors.NO_DATA],
            isLoading: false,
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            validateProfileErrors: undefined,
            isLoading: true,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: { username: 'admin' },
            form: { first: 'name' },
            isLoading: true,
            readonly: false,
            validateProfileErrors: [ValidateProfileErrors.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(dataProfile, ''))).toEqual({
            isLoading: false,
            data: dataProfile,
            form: dataProfile,
            readonly: true,
            validateProfileErrors: undefined,
        });
    });
});
