import { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta:Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Primary: Story = {
    args: {

    },
};
