import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileError } from './selectProfileError';

describe('selectProfileError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error test',
            },
        };

        expect(selectProfileError(state as StateSchema)).toBe('error test');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(selectProfileError(state as StateSchema)).toEqual(undefined);
    });
});
