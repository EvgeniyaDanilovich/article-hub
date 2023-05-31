import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
    test('', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const button = screen.getByTestId('increment-btn');
        userEvent.click(button);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const button = screen.getByTestId('decrement-btn');
        userEvent.click(button);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
