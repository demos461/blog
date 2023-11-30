import { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: [
        StoreDecorator({
            user: { authData: { username: 'USER', id: '42' } },
        }),
    ],
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
    args: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Notification',
                        description: 'Hello world',
                    },
                    {
                        id: '2',
                        title: 'Notification',
                        description: 'Hello world',
                    },
                    {
                        id: '3',
                        title: 'Notification',
                        description: 'Hello world',
                    },
                ],
            },
        ],
    },
};
