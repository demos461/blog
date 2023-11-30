import { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
};
export default meta;

type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    args: {
        label: 'text',
        items: [
            {
                value: 'first',
                content: 'first',
            },
            {
                value: 'second',
                content: 'second',
                disabled: true,
            },
            {
                value: 'third',
                content: 'third',
            },
        ],
        value: 'listbox',
        direction: 'bottom-right',
    },
};
