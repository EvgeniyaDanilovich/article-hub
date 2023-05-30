import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        children: 'Some text',
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children: 'Some text',
        isOpen: true,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
