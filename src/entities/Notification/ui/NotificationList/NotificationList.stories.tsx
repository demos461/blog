import { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
};
export default meta;

type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
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
