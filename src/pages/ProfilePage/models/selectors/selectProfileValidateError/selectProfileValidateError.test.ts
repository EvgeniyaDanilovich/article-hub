import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileValidateErrors } from './selectProfileValidateError';
import { ValidateProfileErrors } from '../../types/profile';

describe('selectProfileValidateError', () => {
    test('should return data error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateProfileErrors: [ValidateProfileErrors.INCORRECT_USER_DATA],
            },
        };

        expect(selectProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateProfileErrors: [ValidateProfileErrors.SERVER_ERROR, ValidateProfileErrors.INCORRECT_AGE],
            },
        };

        expect(selectProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.SERVER_ERROR, ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(selectProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
