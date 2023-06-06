import { StateScheme } from 'app/providers/StoreProvider';

export const selectUserAuthData = (state: StateScheme) => state.user.authData;
