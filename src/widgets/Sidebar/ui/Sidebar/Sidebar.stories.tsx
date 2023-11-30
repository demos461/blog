import { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {},
            },
        }),
    ],
};

export const NoAuth: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {},
        }),
    ],
};
