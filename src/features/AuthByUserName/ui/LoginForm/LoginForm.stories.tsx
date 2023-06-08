import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
};

Primary.decorators = [StoreDecorator({
    loginForm: { username: 'eva', password: '123' },
})];

export const WithError: Story = {
    args: {},
};
WithError.decorators = [StoreDecorator({
    loginForm: { username: 'eva', password: '123', error: 'Error' },
})];

export const Loading: Story = {
    args: {},
};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];

// export const Dark: Story = {
//     args: {},
// };
//
// Dark.decorators = [ThemeDecorator(Theme.DARK)];
