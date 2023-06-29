import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

const profileData = {
    first: 'Eva',
    lastname: 'Di',
    age: 23,
    country: Country.BELARUS,
    currency: Currency.BYN,
    username: 'admin',
    city: 'Grodno',
};

describe('validateProfileData', () => {
    test('complete without errors', async () => {
        const result = validateProfileData(profileData);

        expect(result).toEqual([]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...profileData, age: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('incorrect name, lastname', async () => {
        const result = validateProfileData({ ...profileData, first: undefined, lastname: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...profileData, country: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
    });

    // test('incorrect all', async () => {
    //     const result = validateProfileData({});
    //
    //     expect(result).toEqual([
    //         ValidateProfileErrors.INCORRECT_USER_DATA,
    //         ValidateProfileErrors.INCORRECT_COUNTRY,
    //         ValidateProfileErrors.INCORRECT_AGE,
    //     ]);
    // });
});
