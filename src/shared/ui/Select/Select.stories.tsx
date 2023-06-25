import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Country',
        options: ['opt1', 'jgh2'],
    },
};
