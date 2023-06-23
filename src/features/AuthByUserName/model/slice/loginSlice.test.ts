import { LoginSchema } from 'features/AuthByUserName';
import { loginActions, loginReducer } from '../slice/loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('Eva')))
            .toEqual({ username: 'Eva' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123')))
            .toEqual({ password: '123123' });
    });
});
