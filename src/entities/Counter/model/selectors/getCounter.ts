import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';

// const value = useSelector((state: StateSchema) => state.counter.value);
export const getCounter = (state: StateSchema) => state.counter;
