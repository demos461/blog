import { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof MainPage>;

export const Primary : Story = {
    args: {

    },
};
