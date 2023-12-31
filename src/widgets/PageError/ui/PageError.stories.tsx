import { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
};
export default meta;

type Story = StoryObj<typeof PageError>;

export const Primary: Story = {
    args: {},
};
