import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            user: {
                id: '1',
                username: 'Eva',
                avatar: 'https://img.freepik.com/premium-vector/cute-horse-ponny-colourfull-vector_636967-241.jpg',
            },
            text: 'Comment 1',
            articleId: '1',
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

// Primary.decorators = [StoreDecorator({})];
