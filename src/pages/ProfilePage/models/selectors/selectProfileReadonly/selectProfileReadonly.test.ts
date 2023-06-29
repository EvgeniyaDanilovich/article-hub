import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileReadonly } from './selectProfileReadonly';

describe('selectProfileReadonly', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };

        expect(selectProfileReadonly(state as StateSchema)).toBeTruthy();
    });

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };

        expect(selectProfileReadonly(state as StateSchema)).toBeFalsy();
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(selectProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
