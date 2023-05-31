import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateScheme } from 'app/providers/StoreProvider/config/stateScheme';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../../StoreProvider';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateScheme>;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as StateScheme);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
