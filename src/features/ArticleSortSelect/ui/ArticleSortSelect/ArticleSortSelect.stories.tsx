import { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelect } from './ArticleSortSelect';

const meta:Meta<typeof ArticleSortSelect> = {
    title: 'features/ArticleSortSelect',
    component: ArticleSortSelect,
};
export default meta;

type Story = StoryObj<typeof ArticleSortSelect>;

export const Primary : Story = {
    args: {

    },
};
