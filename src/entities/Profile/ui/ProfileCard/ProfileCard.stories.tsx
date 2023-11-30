import { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
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
};

export const withError: Story = {
    args: {
        error: 'error',
    },
};

export const isLoading: Story = {
    args: {
        isLoading: true,
    },
};
