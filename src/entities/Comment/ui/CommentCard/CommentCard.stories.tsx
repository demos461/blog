import { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
};
export default meta;

type Story = StoryObj<typeof CommentCard>

export const Primary: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'Vasya',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
            },
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
        comment: {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'Vasya',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
            },
        },
    },
};
