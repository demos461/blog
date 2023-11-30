import { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
};
export default meta;

type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
