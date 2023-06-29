import { StateSchema } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { selectProfileForm } from './selectProfileForm';

describe('selectProfileForm', () => {
    test('should return form data', () => {
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
                form: dataProfile,
            },
        };

        expect(selectProfileForm(state as StateSchema)).toEqual(dataProfile);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(selectProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
