import { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';

const meta:Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Primary : Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const Error : Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const onlyText : Story = {
    args: {
        text: 'Text',
    },
};

export const SizeS : Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.S,
    },
};

export const SizeM : Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.M,
    },
};

export const SizeL : Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.L,
    },
};
