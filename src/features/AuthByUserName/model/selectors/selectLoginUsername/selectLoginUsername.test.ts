import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginUsername } from './selectLoginUsername';

describe('selectLoginError', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Name',
            },
        };
        expect(selectLoginUsername(state as StateSchema)).toEqual('Name');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(selectLoginUsername(state as StateSchema)).toEqual('');
    });
});
