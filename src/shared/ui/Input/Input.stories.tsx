import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Light: Story = {
    args: {
        placeholder: 'Enter name',
    },
};

export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
