import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from 'shared/assets/tests/storybook.png';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: {
            id: '1',
            username: 'Vasya',
            avatar: AvatarImg,
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comment: {
        id: '1',
        text: 'hello world',
        user: {
            id: '1',
            username: 'Vasya',
            avatar: AvatarImg,
        },
    },
};