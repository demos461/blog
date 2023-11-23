import { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta:Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary :Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
};
