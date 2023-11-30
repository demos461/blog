import { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: 'user', password: '123' },
        }),
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: '123',
                error: 'Неверный логин или пароль',
            },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
};
