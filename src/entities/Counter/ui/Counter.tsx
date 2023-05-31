import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {

}

export const Counter: React.FC<CounterProps> = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(counterActions.increment());
    };
    const onDecrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <div data-testid="value-title">{value}</div>
            <Button
                data-testid="increment-btn"
                onClick={onIncrement}
                theme={ButtonTheme.OUTLINE}
            >
                ++
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={onDecrement}
                theme={ButtonTheme.OUTLINE}
            >
                --
            </Button>
        </div>
    );
};
