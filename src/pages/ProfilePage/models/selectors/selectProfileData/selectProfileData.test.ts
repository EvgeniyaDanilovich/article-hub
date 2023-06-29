import { StateSchema } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { selectProfileData } from './selectProfileData';

describe('selectProfileData', () => {
    test('should return data', () => {
        const dataProfile: Profile = {
            first: 'Eva',
            lastname: 'Di',
            age: 23,
            country: Country.BELARUS,
            currency: Currency.BYN,
            username: 'admin',
            city: 'Grodno',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data: dataProfile,
            },
        };

        expect(selectProfileData(state as StateSchema)).toEqual(dataProfile);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(selectProfileData(state as StateSchema)).toEqual(undefined);
    });
});
