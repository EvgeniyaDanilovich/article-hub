import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text here',
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title',
        text: 'Text here',
        size: TextSize.M,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'Text here',
        size: TextSize.L,
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text here',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text here',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text here',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
    args: {
        text: 'Text here',
    },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
