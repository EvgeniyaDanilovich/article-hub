import { StateScheme } from 'app/providers/StoreProvider';

export const selectLoginPage = (state: StateScheme) => state?.loginForm;
