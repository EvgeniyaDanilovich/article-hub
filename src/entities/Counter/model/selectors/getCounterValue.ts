import { createSelector } from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/Counter';
import { getCounter } from './getCounter';

// TODO: reselect info
// Мемоизирует значение, т е запоминает. Работает так же как и useMemo. И перещитыыать значение только тогда, когда изменятся входные данные
// т е данные из getCounter например или других селектов, до этих пор он будет возвращать сохраненное значение
// селекторы созданые с помощью реселект позволяют позоляют переиспользовать и комбинировать селекторы, но и мемоизирую результат
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterScheme) => counter.value,
);
