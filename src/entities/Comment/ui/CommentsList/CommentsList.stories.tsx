import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import { CommentsList } from './CommentsList';

const meta: Meta<typeof CommentsList> = {
    title: 'entities/Comment/CommentsList',
    component: CommentsList,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof CommentsList>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                user: {
                    id: '1',
                    username: 'Eva',
                    avatar: 'https://img.freepik.com/premium-vector/cute-horse-ponny-colourfull-vector_636967-241.jpg',
                },
                text: 'Comment 1',
                articleId: '1',
            },
            {
                id: '2',
                user: {
                    id: '2',
                    username: 'User 2',
                    avatar: 'https://img.freepik.com/premium-vector/cute-horse-ponny-colourfull-vector_636967-241.jpg',
                },
                text: 'Comment 2',
                articleId: '1',
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

// Primary.decorators = [StoreDecorator({})];
