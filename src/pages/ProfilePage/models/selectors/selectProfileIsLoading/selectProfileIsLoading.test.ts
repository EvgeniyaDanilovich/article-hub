import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileIsLoading } from './selectProfileIsLoading';

describe('selectProfileIsLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };

        expect(selectProfileIsLoading(state as StateSchema)).toBeTruthy();
    });

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
            },
        };

        expect(selectProfileIsLoading(state as StateSchema)).toBeFalsy();
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
