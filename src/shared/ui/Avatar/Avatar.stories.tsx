import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
        alt: 'Аватар',
    },
};

export const Small: Story = {
    args: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
        size: 50,
        alt: 'Аватар',
    },
};
