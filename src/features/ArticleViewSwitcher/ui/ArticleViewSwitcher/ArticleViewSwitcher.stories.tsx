import { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSwitcher } from './ArticleViewSwitcher';

import { ArticleView } from '@/entities/Article';

const meta: Meta<typeof ArticleViewSwitcher> = {
    title: 'features/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
};
export default meta;

type Story = StoryObj<typeof ArticleViewSwitcher>;

export const ViewSmall: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};

export const ViewBig: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
