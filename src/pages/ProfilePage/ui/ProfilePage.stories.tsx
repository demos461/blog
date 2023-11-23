import { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta:Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};
export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Primary :Story = {
    args: {

    },
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 24,
                country: Country.BELARUS,
                lastname: 'adminich',
                first: 'adminushka',
                city: 'Neverland',
                currency: Currency.BYN,
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
            },
        },
    })],
};
