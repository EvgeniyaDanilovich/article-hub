import { BrowserRouter } from 'react-router-dom';
import { StoryObj } from '@storybook/react';

export const RouterDecorator = (story: any) => {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    );
};
