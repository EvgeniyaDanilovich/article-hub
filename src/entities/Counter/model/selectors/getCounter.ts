import { useSelector } from 'react-redux';
import { StateScheme } from 'app/providers/StoreProvider';

// const value = useSelector((state: StateScheme) => state.counter.value);
export const getCounter = (state: StateScheme) => state.counter;
