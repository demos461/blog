import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.png';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
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

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
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
