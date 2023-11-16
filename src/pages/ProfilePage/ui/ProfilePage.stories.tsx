import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.png';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 24,
            country: Country.BELARUS,
            lastname: 'adminich',
            first: 'adminushka',
            city: 'Neverland',
            currency: Currency.BYN,
            avatar: AvatarImg,
        },
    },
})];
