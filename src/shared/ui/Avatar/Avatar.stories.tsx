import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarImg from '../../assets/tests/storybook.png';

import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg,
    alt: 'Аватар',
};

export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    size: 50,
    alt: 'Аватар',
};
