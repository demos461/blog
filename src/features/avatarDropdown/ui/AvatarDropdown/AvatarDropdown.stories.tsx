import { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
};
export default meta;

type Story = StoryObj<typeof AvatarDropdown>;

export const Admin: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
                    roles: [UserRole.ADMIN],
                },
            },
        }),
    ],
};

export const User: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/220px-Kittyply_edit1.jpg',
                    roles: [UserRole.USER],
                },
            },
        }),
    ],
};
