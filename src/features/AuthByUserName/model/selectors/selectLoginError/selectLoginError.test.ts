import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { selectLoginError } from './selectLoginError';

describe('selectLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Wrong password',
            },
        };
        expect(selectLoginError(state as StateSchema)).toEqual('Wrong password');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(selectLoginError(state as StateSchema)).toEqual(undefined);
    });
});
