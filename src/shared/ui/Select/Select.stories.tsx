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
        options: [
            { value: '1', content: 'option1' },
            { value: '2', content: 'option2' },
            { value: '3', content: 'option3' },
        ],
    },
};
