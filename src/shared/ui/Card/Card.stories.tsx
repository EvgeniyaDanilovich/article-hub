import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: <Text title="Title" text="Card component" />,
    },
};
