import { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Primary : Story = {
    args: {

    },
};
