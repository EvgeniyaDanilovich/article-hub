import { StateSchema } from 'app/providers/StoreProvider';

export const selectLoginPage = (state: StateSchema) => state?.loginForm;
