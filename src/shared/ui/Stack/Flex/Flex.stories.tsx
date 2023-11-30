import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
};
export default meta;

type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        gap: '16',
        direction: 'column',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
};

export const ColumnAlignStart: Story = {
    args: {
        align: 'start',
        direction: 'column',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        align: 'end',
        direction: 'column',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
};

export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
};

export const RowGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        ),
    },
};
