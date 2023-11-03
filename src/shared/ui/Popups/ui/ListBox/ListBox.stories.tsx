import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
};
