import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from '../../model/types/article';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';

export default {
    title: 'entities/Article/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSwitcher>;

const Template: ComponentStory<typeof ArticleViewSwitcher> = (args) => <ArticleViewSwitcher {...args} />;

export const ViewSmall = Template.bind({});
ViewSmall.args = {
    view: ArticleView.SMALL,
};
export const ViewBig = Template.bind({});
ViewBig.args = {
    view: ArticleView.BIG,
};
