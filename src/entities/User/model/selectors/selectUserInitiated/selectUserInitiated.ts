import { StateSchema } from 'app/providers/StoreProvider';

export const selectUserInitiated = (state: StateSchema) => state.user._inited;
