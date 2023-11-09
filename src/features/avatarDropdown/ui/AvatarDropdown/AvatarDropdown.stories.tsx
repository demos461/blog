import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import AvatarIcon from '@/shared/assets/tests/storybook.png';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            avatar: AvatarIcon,
            roles: [UserRole.ADMIN],
        },
    },
})];

export const User = Template.bind({});
User.args = {};
User.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            avatar: AvatarIcon,
            roles: [UserRole.USER],
        },
    },
})];
