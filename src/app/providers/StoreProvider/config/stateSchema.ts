import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterScheme;
    user: UserScheme;
    loginForm: LoginSchema;
}
