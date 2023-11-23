import { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta:Meta<typeof ThemeSwitcher> = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,

};
export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary : Story = {
    args: {

    },
};
