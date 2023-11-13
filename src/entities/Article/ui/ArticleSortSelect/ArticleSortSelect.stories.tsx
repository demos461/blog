import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleSortSelect } from './ArticleSortSelect';

export default {
    title: 'entities/Article/ArticleSortSelect',
    component: ArticleSortSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelect>;

const Template: ComponentStory<typeof ArticleSortSelect> = (args) => <ArticleSortSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
