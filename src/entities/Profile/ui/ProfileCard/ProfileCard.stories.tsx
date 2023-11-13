import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 24,
        country: Country.BELARUS,
        lastname: 'adminich',
        first: 'adminushka',
        city: 'Neverland',
        currency: Currency.BYN,
        avatar: AvatarImg,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
