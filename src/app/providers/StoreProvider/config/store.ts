import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider/config/stateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';

export function createReduxStore(initialState?: StateScheme) {
    const rootReducer: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateScheme>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
