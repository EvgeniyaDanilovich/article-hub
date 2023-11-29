import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Normal: Story = {
    args: {
        text: 'const meta: Meta<typeof Code> = {\n'
            + '    title: \'/Code\',\n'
            + '    component: Code,\n'
            + '    tags: [\'autodocs\'],\n'
            + '    argTypes: {\n'
            + '         backgroundColor: { control: \'color\' },\n'
            + '    },\n'
            + '};\n'
            + '\n'
            + 'export default meta;\n'
            + '\n'
            + 'const Story = StoryObj<typeof Code>;',
    },
};

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
