import { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
};
export default meta;

type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: {
                    id: '1',
                    username: 'Vasya',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
                },
            },
            {
                id: '1',
                text: 'mmm, nice',
                user: {
                    id: '2',
                    username: 'Ivan',
                },
            },
        ],
    },
};
export const Loading: Story = {
    args: {
        ...Primary.args,
        isLoading: true,
    },
};
